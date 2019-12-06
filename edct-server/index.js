// This is the "end point" for all http calls from the front end
// In the future this could be redone with a more modular design including, and
// security as well. BUT, seeing as this is a minimum viable server
// code base for CRUD on users, projects, experiments it "works".
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userTable = require('./user_org_info/userQueries')
const projectTable = require('./projects/projectQueries')
const projectMembers = require('./projects/projectMembers')
const experimentsTable = require('./experiments/experimentQueries')
const projectsExperiments = require('./experiments/projectsExperiments')
const samplesSetsTable = require('./samplesets/sampleSetQueries')
const experimentsSampleSets = require('./samplesets/experimentsSampleSets')

const port = 4000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

// All of these work with the backend
// CRU on users
app.get('/users', userTable.getUsers)
app.get('/users/:email', userTable.getUserByEmail)
app.post('/users', userTable.createUser)
app.put('/users/:id', userTable.updateUser)
// Uncomment this code when the front end has the option
// to delete a user.
// app.delete('/users/:id', userTable.deleteUser)

// All of these work with the backend
// CRUD on projects
app.get('/projects/:id', projectTable.getProjectsByID)
app.post('/projects/', projectTable.createProject)
app.put('/projects/:id', projectTable.updateProject)
app.delete('/projects/:id', projectTable.deleteProject)

// CR on project_members
app.get('/projectMembers/:id', projectMembers.getProjectsByUserID)
app.post('/projectMembers/', projectMembers.addUserToProject)

// CRU on experiments
app.get('/experiments/:id', experimentsTable.getExperiment)
app.post('/experiments', experimentsTable.createExperiment)
app.put('/experiments/:id', experimentsTable.updateExperiment)

// CRD on projects_experiments
app.get('/projectexperiments/:id', projectsExperiments.getExperimentsByProject)
app.post('/projectexperiments/', projectsExperiments.addExperimentToProject)
app.delete('/projectexperiments/', projectsExperiments.deleteExperimentFromProject)

// CR on samplesets
app.get('/samplesets/:id', samplesSetsTable.getSampleSet)
app.post('/samplesets/', samplesSetsTable.createSampleSet)

// CRD on experiments_samplesets
app.get('/experimentssamplesets/:id', experimentsSampleSets.getSampleSetsByExperiment)
app.post('/experimentssamplesets/', experimentsSampleSets.addSampleSetToExperiment)
app.delete('/experimentssamplesets/', experimentsSampleSets.deleteSampleSetFromExperiment)

app.listen(port, () => {
  console.log(`edct-server running on port ${port}.`);
  console.log(`You should be good to connect the front end sever.`);
  console.log(`If you want to change this port number, see line 13 of index.js`);
})