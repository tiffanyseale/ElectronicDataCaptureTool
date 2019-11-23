<template>
    <div>
        <user-status v-if="!loggedIn" :loggedIn="loggedIn" @logInChecked="loggedIn = $event"></user-status>
        <project-vue v-else></project-vue>
    </div>
    
</template>
<script>
    import UserStatus from './UserStatus.vue';
    import Projects from './Projects.vue';
    export default {
        data (){
            return {
            loggedIn: false
            }
        },
        components: {
            'user-status': UserStatus,
            'project-vue' : Projects
        }
    }
</script>