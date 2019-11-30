import Home from './components/Home.vue';
import LogIn from './components/UserAuthentication/LogIn.vue';
import NewUser from './components/UserAuthentication/NewUser.vue';

export const routes = [
    { path: '/', component : Home},
    { path: '/LogIn', component: LogIn},
    { path: '/NewUser', component: NewUser}

];