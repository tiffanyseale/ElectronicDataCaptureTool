<template>
<div class ="container">
  <router-view></router-view>
</div>
</template>

<script>
import { store } from "./store.js";
export default {
  name: 'app',
  data () {
    return {
      loggedIn: store.state.loggedIn
    }
  }
}
</script>

<style>
/* body {
  background-image: url('./assets/background_photo.jpg');
} */
</style>
