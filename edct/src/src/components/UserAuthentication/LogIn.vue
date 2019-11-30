<template>
    <div align = center>
        <h1>Electronic Data Capture Tool</h1>
        <h2> Welcome back! </h2>
        <br>
            Enter your email:
        <br>
        <input type="text" id="email" v-model="email">
        <br>
        <button v-if="email != ''" class="button" @click="logIn">Log in</button>
</div>
</template>
<script>
export default {
  data () {
    return {
        email: '',
        userID: 0
    }
  },
  methods: {
    logIn () {
        this.$http.get('http://localhost:4000/users/'+ this.email)
                            .then(response => {
                                try 
                                {
                                    if (response.body.length > 0)
                                    {
                                        this.userID = response.body[0].id;
                                    }
                                }
                                catch(error)
                                {
                                    alert('There was a network error'); 
                                }
                            }, error => { });
        if (this.userID !== 0) {
            this.$store.commit('setUserID', this.userID);
            this.$store.commit('logIn');
            this.$router.push({path: '/Projects'});
        }
        else {
            alert('That email is not registered!'); 
        }
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