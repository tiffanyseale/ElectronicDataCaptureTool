<template>
    <div align = center>
        <h1>Please click below to see this experiment's sample set id's</h1>
        <br>
        <button v-if="!viewSampleSets" class="button" @click="getSampleSets">View sample sets</button>

        <table class="sampleSetTable" id="firstTable" v-if="viewSampleSets">
            <thead>
                <tr>
                <th>ID</th>
                </tr>
            </thead>
            <tbody>
                <tr class='clickable-row' v-for="id in sampleSetIDs" :key="id" @click="chooseSampleSet(id)">
                <td class="sampleSetRow">{{id.sampleset_id}}</td>
                </tr>
            </tbody>
            </table>
            <br>
        <h1>More functionality associated with sample sets coming soon</h1>
    </div>
</template>
<script>
export default {
  data () {
    return {
        viewSampleSets: false,
        sampleSetIDs: []
    }
  },
  methods: {
      getExperimentID () {
        return this.$store.state.chosenExperiment.id;
      },
      getSampleSets () {
        this.$http.get('http://localhost:4000/experimentssamplesets/'+ this.getExperimentID())
            .then(response => {
                var count = 0;
                for (var i = response.body.length; i > 0; i--)
                {
                    this.sampleSetIDs.push(response.body[0]);
                    count++;
                }
                if (count < 1)
                {
                    alert('This experiment does not contain any sample sets yet!');
                }
                this.viewSampleSets = !this.viewSampleSets;

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
    .sampleSetTable {
      padding: 30px; 
      border: 2px solid rgba(0, 0, 0, 1);
      border-radius: 5px;
      text-align: center;
      min-width: 75%;
      position: relative;
    }
    .sampleSetRow {
      padding: 10px; 
      border: 2px solid #1c87c9;
      border-radius: 5px;
      text-align: center;
      min-width: 75%;
      position: relative;
    }
</style>