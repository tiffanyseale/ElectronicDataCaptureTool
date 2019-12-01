import Home from './components/Home.vue';
import LogIn from './components/UserAuthentication/LogIn.vue';
import NewUser from './components/UserAuthentication/NewUser.vue';
import Projects from './components/Projects/Projects.vue';
import AddProject from './components/Projects/AddProject.vue';
import Experiments from './components/Experiments/Experiments.vue';

export const routes = [
    { path: '/', component : Home},
    { path: '/LogIn', component: LogIn},
    { path: '/NewUser', component: NewUser},
    { path: '/Projects', component: Projects},
    { path: '/Projects/AddProject', component: AddProject},
    { path: '/Experiments', component: Experiments}

];