<template>
    <div align = center>
        <h1>Electronic Data Capture Tool</h1>
        <h2> Please add the project! </h2>
        <h3> Keep in mind: you are the leader of any project you create </h3>
        <br>
            Enter the name of the project:
        <br>
        <input type="text" id="project.name" v-model="project.name">
        <br>
        <div v-if="project.name != ''">
            Enter a description of the project:
            <input type="text" id="project_description" v-model="project.description">
            <br>
            <button v-if="project.description != ''" class="button" @click="createProject">Create Project</button>
        </div>
</div>
</template>
<script>
export default {
  data () {
    return {
        project: {
            name: '',
            leader: 1,
            description: ''
        }
    }
  },
  methods: {
    createProject () {
        console.log(this.project);
        this.$http.post('http://localhost:4000/projects/', this.project)
            .then(response => {
                    this.$router.push({path: '/Projects'});
            }, error => {  alert('There was a network error!'); });
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
    input[type=text] {
        width: 75%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }
</style>