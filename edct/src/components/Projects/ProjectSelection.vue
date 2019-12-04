<template>
<div align = center>
    <h1>Electronic Data Capture Tool</h1>
    <h2> Welcome to your project page!</h2>
    <h2> What would you like to do? </h2>
    <br>
     <button v-if="!viewProjects" class="button" @click="getProjects">View your current projects</button>
     <br>
     <button class="button" @click="addProjects">Add a project</button>
     <br>
<table class="projectTable" id="firstTable" v-if="viewProjects">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class='clickable-row' v-for="project in projects" :key="project.id" @click="chooseProject(project)">
      <td class="projectRow">{{project.name}}</td>
      <td class="projectRow">{{project.description}}</td>
    </tr>
  </tbody>
</table>
</div>
</template>
<script>
export default {
  data () {
    return {
        projects: [],
        viewProjects: false
    }
  },
  methods: {
    getProjects () {
        this.$http.get('http://localhost:4000/projectMembers/'+ this.$store.state.userID)
            .then(response => {
                var count = 0;
                for (var i = response.body.length; i > 0; i--)
                {
                    this.$store.commit('setProjectIDs', response.body[i-1].project_id);
                    this.getProject(response.body[i-1].project_id);
                    count++;
                }
                if (count < 1)
                {
                    alert('You are not assigned to a project yet! Try adding one');
                }
                this.viewProjects = !this.viewProjects;

            }, error => {  alert('There was a network error!'); });
    },
    getProject (project_id) {
        this.$http.get('http://localhost:4000/projects/'+ project_id)
            .then(response => {
                    this.projects.push(response.body[0]);
                    return;
            }, error => {  alert('There was a network error!'); });
    },
    addProjects () {
        this.$router.push({path: '/Projects/AddProject'});
    },
    chooseProject (project) {
      this.$store.commit('setProjectID', project);
      this.$router.push({path: '/Experiments'});
    }
  }
}
</script>
<style scoped>
.section {
        display: block;
        min-height: 30em;
        max-width: 30em;
        position: relative;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
    .projectTable {
      padding: 30px; 
      border: 2px solid rgba(0, 0, 0, 1);
      border-radius: 5px;
      text-align: center;
      min-width: 75%;
      position: relative;
    }
    .projectRow {
      padding: 10px; 
      border: 2px solid #1c87c9;
      border-radius: 5px;
      text-align: center;
      min-width: 75%;
      position: relative;
    }
</style>