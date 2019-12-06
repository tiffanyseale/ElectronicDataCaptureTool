<template>
    <div align = center>
        <h1>Electronic Data Capture Tool</h1>
        <h2> Please add the experiment! </h2>
        <h3> Keep in mind: you are the owner of any experiment you create </h3>
        <br>
            Enter a description of the experiment:
        <input type="text" id="experiment_description" v-model="experiment.description">
        <br>
        <button v-if="experiment.description != ''" class="button" @click="createExperiment">Create Experiment</button>
</div>
</template>
<script>
export default {
  data () {
    return {
        experiment: {
            owner: $store.state.userID,
            project: $store.state.chosenProject.id,
            description: ''
        }
    }
  },
  methods: {
    createExperiment () {
        this.$http.post('http://localhost:4000/experiments/', this.experiment)
            .then(response => {
                    this.$router.push({path: '/Experiments'});
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