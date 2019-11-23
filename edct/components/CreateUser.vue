<template>
    <div>
    <p> Create a user! </p>
        <button @click="createNewUser">Create an account!</button>
    </div>
</template>
<script>
    export default {
            data () {
                return {
                    userCreated: false,
                    user: {
                        name: 'this',
                        email: 'is',
                        password: 'working'
                    }
                }
            },
            methods: {
                createNewUser () {
                    if (!this.userIsCreated)
                    {
                        this.$http.post('http://localhost:3000/users/', this.user)
                            .then(response => {
                                console.log(response);
                            }, error => { console.log(error); });
                        this.userCreated = !this.userCreated;
                        this.$emit('userIsCreated', this.userCreated);
                    }
                }
            }
    }
</script>