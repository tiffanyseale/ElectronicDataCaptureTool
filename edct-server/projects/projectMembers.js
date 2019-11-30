const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'edct',
  password: 'password',
  port: 5432,
})

const getProjectsByUserID = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT project_id FROM project_members WHERE user_id = $1',[id],(error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const addUserToProject = (request, response) => {
  const { user_id, project_id } = request.body

  pool.query('INSERT INTO project_members (user_id, project_id) VALUES ($1, $2)', [user_id, project_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Project member added successfully`)
    })
}

module.exports = {
  getProjectsByUserID,
  addUserToProject
}