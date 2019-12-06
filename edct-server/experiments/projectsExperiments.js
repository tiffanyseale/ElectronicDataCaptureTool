const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'edct',
  password: 'password',
  port: 5432,
})

const getExperimentsByProject = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT experiment_id FROM projects_experiments WHERE project_id = $1', [id], (error, results) => {
    //pool.query('SELECT experiment_id FROM projects_experiments WHERE project_id = 32', (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(results.rows)
    })
}

// This should be working as well
const addExperimentToProject = (request, response) => {
  const { project_id, experiment_id } = request.body
  pool.query('INSERT INTO projects_experiments (project_id, experiment_id) VALUES ($1, $2)', [project_id, experiment_id], (error, results) => {
    if (error) {
      throw error
    }
      response.status(201).send(`Experiment to project ${project_id}`)
  })
}

// This should be working as well
const deleteExperimentFromProject = (request, response) => {
    const { project_id, experiment_id } = request.body
    pool.query('DELETE FROM projects_experiments WHERE project_id = $1 AND experiment_id = $2)', [project_id, experiment_id], (error, results) => {
      if (error) {
        throw error
      }
        response.status(201).send(`Experiment was deleted from project ${project_id}`)
    })
  }

module.exports = {
  getExperimentsByProject,
  addExperimentToProject,
  deleteExperimentFromProject
}