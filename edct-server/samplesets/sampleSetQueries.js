const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'edct',
  password: 'password',
  port: 5432,
})

const getSampleSet = (request, response) => {
  const { id } = request.body

  pool.query('SELECT * FROM samplesets WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Sampleset retrieved successfully`)
    })
}

// This should be working as well
const createSampleSet = (request, response) => {
  const { experiment_id, dataset_directory } = request.body
  // using csvtojson from npm, https://www.npmjs.com/package/csvtojson
  const csv = require('csvtojson')
  const samples = csv().fromFile(dataset_directory);
  pool.query('INSERT INTO samplesets (samples) VALUES $1', [samples], (error, results) => {
    if (error) {
      throw error
    }
    pool.query('INSERT INTO experiments_samplesets (experiment_id, sampleset_id) VALUES ($1, $2)', [experiment_id, results.insertId], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Sampleset added with ID: ${results.insertId}`)
    })
  })
}

module.exports = {
  getSampleSet,
  createSampleSet
}