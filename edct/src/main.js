import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import Home from './Home.vue'
import NavBar from '../components/NavBar.vue'

Vue.use(VueResource);
Vue.component('home-page', Home);
Vue.component('nav-bar', NavBar);

new Vue({
  el: '#app',
  render: h => h(App)
})
