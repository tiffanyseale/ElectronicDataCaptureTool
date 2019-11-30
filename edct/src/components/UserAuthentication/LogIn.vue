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
        email: ''
    }
  },
  methods: {
    logIn () {
        this.$http.get('http://localhost:4000/users/'+ this.email)
                            .then(response => {
                                try {
                                console.log(response.body[0].id);
                                }
                                catch(error) {
                                console.log('That user does not exist!');
                                }
                            }, error => { console.log(error); });
      this.$store.commit('logIn');
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