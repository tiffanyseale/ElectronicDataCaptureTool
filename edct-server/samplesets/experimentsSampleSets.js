const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'edct',
  password: 'password',
  port: 5432,
})

// Need to move this to experimentSampleSets
const getSampleSetsByExperiment = (request, response) => {
  const { experiment_id } = request.body

  pool.query('SELECT sampleset_id FROM experiments_samplesets WHERE experiment_id = $1', [experiment_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Sampleset id's retrieved successfully`)
    })
}

// This should be working as well
const addSampleSetToExperiment = (request, response) => {
  const { experiment_id, sampleset_id } = request.body
  pool.query('INSERT INTO experiments_samplesets (experiment_id, sampleset_id) VALUES ($1, $2)', [experiment_id, sampleset_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Sampleset added with ID: ${results.insertId}`)
  })
}

const deleteSampleSetFromExperiment = (request, response) => {
    const { experiment_id, sampleset_id } = request.body
    pool.query('DELETE FROM experiments_samplesets WHERE experiment_id = $1 AND sampleset_id = $2', [experiment_id, sampleset_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Sampleset deleted from experiment ${experiment_id}`)
    })
  }


module.exports = {
  getSampleSetsByExperiment,
  addSampleSetToExperiment,
  deleteSampleSetFromExperiment
}