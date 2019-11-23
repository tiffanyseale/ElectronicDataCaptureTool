// This is the "end point" for all http calls from the front end
// In the future this could be redone with a more modular design including, and
// security as well. BUT, seeing as this is a minimum viable server
// code base for CRUD on user, project, and experiment it "works".
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userTable = require('./user_org_info/userQueries')
const projectTable = require('./projects/projectQueries')
const projectMembers = require('./user_org_info/projectMembers')
const experimentsTable = require('./experiments/experimentQueries')

const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

// CRUD on users
app.get('/users', userTable.getUsers)
app.get('/users/:email', userTable.getUserByEmail)
app.post('/users', userTable.createUser)
app.put('/users/:id', userTable.updateUser)
app.delete('/users/:id', userTable.deleteUser)

// CRUD on projects
app.get('/projects', projectTable.getProjects)
app.post('/projects', projectTable.createProject)
app.put('/projects/:id', projectTable.updateProject)
app.delete('/projects/:id', projectTable.deleteProject)

// Add additional users to the project_members table
app.post('/projectMembers/', projectMembers.addUserToProject)

// CRUD on experiments
app.get('/experiments:id', experimentsTable.getExperiment)
app.get('/experiments:project', experimentsTable.getExperimentsByProject)
app.post('/experiments', experimentsTable.createExperiment)

app.listen(port, () => {
  console.log(`edct-server running on port ${port}.`)
})