import Home from './components/Home.vue';
import LogIn from './components/UserAuthentication/LogIn.vue';
import NewUser from './components/UserAuthentication/NewUser.vue';
import Projects from './components/Projects/ProjectSelection.vue';
import AddProject from './components/Projects/AddProject.vue';
import Experiments from './components/Experiments/ExperimentSelection.vue';
import AddExperiments from './components/Experiments/AddExperiments.vue';
import SampleSets from './components/SampleSets/SampleSetSelection.vue';

export const routes = [
    { path: '/', component : Home},
    { path: '/LogIn', component: LogIn},
    { path: '/NewUser', component: NewUser},
    { path: '/Projects', component: Projects},
    { path: '/Projects/AddProject', component: AddProject},
    { path: '/Experiments', component: Experiments},
    { path: '/Experiments/AddExperiment', component: AddExperiments },
    { path: '/SampleSets', component: SampleSets}

];