<template>
    <div align = center>
        <h1>Welcome to the Electronic Data Capture Tool</h1>
        <h2>Please create an account!</h2>
        <br>
        Enter your name: 
        <br>
        <input type="text" id="name" v-model="user.name">
        <br>
        Enter your email:
        <br>
        <input type="text" id="email" v-model="user.email">
        <br>
        <button v-if="email != ''" class="button" @click="createNewUser">Submit</button>
</div>
</template>
<script>
export default {
  data () {
    return {
        user: {
            name: '',
            email: ''
        }
    }
  },
  methods: {
    createNewUser () {
        this.$http.post('http://localhost:4000/users/', this.user)
                .then(response => {
                    this.$router.push({path: '/LogIn'})
                }, error => { console.log(error); });
    }
  }
}
</script>

<style scoped>
    .section {
        display: block;
        min-height: 30em;
        max-width: 30em;
        position: relative;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
    input[type=text] {
        width: 75%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }
</style>