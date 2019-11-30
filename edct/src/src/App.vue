<template>
<div class ="container">
  <router-view></router-view>
</div>
</template>

<script>
import { store } from "./store.js";
import { routes } from './routes';
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
/* body {
  background-image: url('./assets/background_photo.jpg');
} */
</style>
