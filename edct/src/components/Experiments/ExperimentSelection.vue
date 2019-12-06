<template>
    <div align = center>
        <h1>{{getProjectName()}}</h1>
        <br>
        <h2>{{getProjectDescription()}}</h2>
        <h2 v-if="getProjectLeader">This is your project!</h2>
        <h2> What would you like to do? </h2>
        <br>
        <button v-if="!viewExperiments" class="button" @click="getExperiments">View your current experiments</button>
        <br>
        <button v-if="getProjectLeader" class="button" @click="addExperiment">Add an experiment to the project</button>
        <br>
        <table class="experimentTable" id="firstTable" v-if="viewExperiments">
            <thead>
                <tr>
                <th>ID</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr class='clickable-row' v-for="experiment in experiments" :key="experiment.id" @click="chooseExperiment(experiment)">
                <td class="experimentRow">{{experiment.id}}</td>
                <td class="experimentRow">{{experiment.description}}</td>
                </tr>
            </tbody>
            </table>
    </div>
</template>
<script>
export default {
  data () {
    return {
        viewExperiments: false,
        experiments: []
    }
  },
  methods: {
      getProjectName () {
          return this.$store.state.chosenProject.name;
      },
      getProjectDescription () {
          return this.$store.state.chosenProject.description;
      },
      getProjectLeader () {
          return this.$store.state.userID === this.$store.state.chosenProject.leader ? true : false;
      },
      getExperiments () {
        this.$http.get('http://localhost:4000/projectexperiments/'+ this.$store.state.chosenProject.id)
            .then(response => {
                var count = 0;
                for (var i = response.body.length; i > 0; i--)
                {
                    this.$store.commit('setExperimentIDs', response.body[i-1].experiment_id);
                    this.getExperiment(response.body[i-1].experiment_id);
                    count++;
                }
                if (count < 1)
                {
                    alert('This project does not contain any experiments yet! If you are the leader, try adding one! Otherwise, contact the leader for further information.');
                }
                this.viewExperiments = !this.viewExperiments;

            }, error => {  alert('There was a network error!'); });
      },
      getExperiment (experiment_id) {
        this.$http.get('http://localhost:4000/experiments/'+ experiment_id)
            .then(response => {
                    this.experiments.push(response.body[0]);
                    return;
            }, error => {  alert('There was a network error!'); });
      },
      addExperiment () {
          this.$router.push({path: '/Experiments/AddExperiment'});
      },
      chooseExperiment (experiment) {
          this.$store.commit('setExperimentID', experiment);
          this.$router.push({path: '/SampleSets'});
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
    .experimentTable {
      padding: 30px; 
      border: 2px solid rgba(0, 0, 0, 1);
      border-radius: 5px;
      text-align: center;
      min-width: 75%;
      position: relative;
    }
    .experimentRow {
      padding: 10px; 
      border: 2px solid #1c87c9;
      border-radius: 5px;
      text-align: center;
      min-width: 75%;
      position: relative;
    }
</style>