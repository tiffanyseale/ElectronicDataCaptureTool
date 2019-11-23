<template>
    <div>
        <user-status></user-status>
        <project-vue></project-vue>
    </div>
    
</template>
<script>
    import UserStatus from './UserStatus.vue';
    import Projects from './Projects.vue';
    export default {
        components: {
            'user-status': UserStatus,
            'project-vue' : Projects
        }
    }
</script>