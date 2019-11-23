<template>
    <div>
        <div v-if="!loggingIn">
            <button @click="attemptLogIn">Log in!</button>
            <div v-if="possibleNewUser">
                <button @click="createNewUser">Create an account!</button>
            </div>
            <div v-if="!userCreated && !possibleNewUser">
                <create-user :userCreated="userCreated" @userIsCreated="userCreated = $event"></create-user>
            </div>
        </div>
        <div v-else>
            <h2> Welcome back! </h2>
            <br>
            Email:<br>
            <input v-model="email" placeholder="email">
            <br>
            Password:<br>
            <input v-model="password" placeholder="password">
            <br>
            <button @click="simplestUserAuth">Log in!</button>
        </div>

    </div>
</template>
<script>
    import CreateUser from '../components/CreateUser.vue';
    import UserAuth from '../components/UserAuth.vue';
    export default {
        data () {
            return {
                loggingIn: false,
                loggedIn: false,
                possibleNewUser: true,
                userCreated: false,
                email: '',
                password: ''
            }
        },
        methods: {
            attemptLogIn () {
                this.loggingIn = !this.loggingIn;
            },
            createNewUser () {
                if (!this.loggedIn && this.possibleNewUser)
                {
                    this.possibleNewUser = !this.possibleNewUser;
                }
            },
            simplestUserAuth()
            {
                this.$http.get('http://localhost:3000/users/', this.email)
                            .then(response => {
                                console.log(response);
                            }, error => { console.log(error); });
                this.loggedIn = !this.loggedIn;
                this.$emit('logInChecked', this.loggedIn);
            }
        },
        components: {
            'create-user': CreateUser,
            'user-auth': UserAuth
        }
    }
</script>