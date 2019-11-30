<template>
    <div align = center>
        <section align = "center">
            <h1>Welcome to the Electronic Data Capture Tool!</h1>
            <button class="button" @click="logIn">Log in</button>
            <button class="button" @click="newUser">Create account</button>
    </section>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    logIn () {
      // this.$store.commit('logIn');
      this.$router.push({path: '/LogIn'})
    },
    newUser () {
      this.$router.push({path: '/NewUser'})
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
</style>