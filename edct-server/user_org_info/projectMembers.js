const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'edctapi',
  password: 'password',
  port: 5432,
})

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
  addUserToProject
}