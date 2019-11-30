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
app.get('/projects', projectTable.getProjects)
app.get('/projects/:id', projectTable.getProjectsByID)
app.post('/projects', projectTable.createProject)
app.put('/projects/:id', projectTable.updateProject)
app.delete('/projects/:id', projectTable.deleteProject)

// This shouldn't need to be adjusted when changing the database layer
// Add additional users to the project_members table
app.get('/projectMembers/:id', projectMembers.getProjectsByUserID)
app.post('/projectMembers/', projectMembers.addUserToProject)

// CRUD on experiments
app.get('/experiments:id', experimentsTable.getExperiment)
app.get('/experiments:project', experimentsTable.getExperimentsByProject)
app.post('/experiments', experimentsTable.createExperiment)
app.put('/experiments/:id', experimentsTable.updateExperiment)

app.listen(port, () => {
  console.log(`edct-server running on port ${port}.`)
})