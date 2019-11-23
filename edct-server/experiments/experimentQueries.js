const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'edctapi',
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

const getExperimentsByProject = (request, response) => {
  const { project_id } = request.body

  pool.query('SELECT id FROM experiments WHERE project = $1', [project_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Experiment id's retrieved successfully`)
    })
}

const createExperiment = (request, response) => {
  const { owner, project, properties, dataset } = request.body

  pool.query('INSERT INTO experiments (owner, project, properties, dataset) VALUES ($1, $2, $3, $4)', [owner, project, properties, dataset], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Experiment added with ID: ${results.insertId}`)
  })
}

module.exports = {
  getExperiment,
  getExperimentsByProject,
  createExperiment
}