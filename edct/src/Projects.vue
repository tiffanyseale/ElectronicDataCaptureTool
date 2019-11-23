<template>
    <div>
        <p>Your Projects!</p>
        <div v-for="project in projects" v-bind:key="project">
            {{project}}
            here
        </div>
    </div> 
</template>
<script>
export default {
        data () {
            return {
                projects : [] 
            }
        }
    }
</script>