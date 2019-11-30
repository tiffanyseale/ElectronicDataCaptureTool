const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'edct',
  password: 'password',
  port: 5432,
})

const getExperiment = (request, response) => {
  const { id } = request.body

  pool.query('SELECT * FROM experiments WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Experiment retrieved successfully`)
    })
}

// This should be working as well
const createExperiment = (request, response) => {
  const { owner, project, description } = request.body
  // you will need this for expeirments
  // properties and dataset should be paths to their .csv files
  // using csvtojson from npm, https://www.npmjs.com/package/csvtojson
  // const csv = require('csvtojson')
  // const properties= csv().fromFile(propertiespath);
  // const dataset = csv().fromFile(datasetpath);
  pool.query('INSERT INTO experiments (owner, description) VALUES ($1, $2)', [owner, description], (error, results) => {
    if (error) {
      throw error
    }
    pool.query('INSERT INTO projects_experiments (project_id, experiment_id) VALUES ($1, $2)', [project, results.insertId], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Experiment added with ID: ${results.insertId}`)
    })
  })
}

// This is working
const updateExperiment = (request, response) => {
  const experiment_id = parseInt(request.params.id)
  const { owner, description } = request.body

  pool.query('UPDATE experiments SET owner = $1, description = $2 WHERE id = $3',
  [owner, description, experiment_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Experiment information updated successfully`)
    })
}

module.exports = {
  getExperiment,
  createExperiment,
  updateExperiment
}