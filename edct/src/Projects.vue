<template>
    <div>
        <p>Your Projects!</p>
        <div v-for="project in projects" v-bind:key="project">
            {{project}}
            here
        </div>
        {{getProjects()}}
    </div> 
</template>
<script>
export default {
        data () {
            return {
                projects : [],
                // this is just for dev/testing purposed
                // when user authentication is added this should be populated
                // at this point
                userId: 4
            }
        },
        methods: {
            getProjects() {
                var project_id = [];
                this.$http.get('http://localhost:3000/projectMembers/' + this.userId)
                            .then(response => {
                                response.data.forEach(this.getFullProjects);
                            }, error => { console.log(error); });

            },
            getFullProjects(item) {
                this.$http.get('http://localhost:3000/projects/' + item.project_id)
                            .then(response => {
                                this.projects.push(response.data);
                            }, error => { console.log(error); });
            }
        }
    }
</script>