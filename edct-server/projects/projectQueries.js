const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'edctapi',
  password: 'password',
  port: 5432,
})

const getProjects = (request, response) => {
  pool.query('SELECT * FROM project_members',(error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getProjectsByID = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM projects WHERE id = $1',[id],(error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createProject = (request, response) => {
  const { name, leader, description } = request.body

  pool.query('INSERT INTO projects (name, leader, description) VALUES ($1, $2, $3)', [name, leader, description], (error, results) => {
    if (error) {
      throw error
    }
    pool.query('INSERT INTO project_members (user_id, project_id) VALUES ($1, $2)', [leader, results.insertId], (error, results) => {
        if (error) {
          throw error
        }
        response.status(201).send(`Join table successful`)
        })
    })
}

const updateProject = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, description } = request.body

  pool.query(
    'UPDATE projects SET name = $1, description = $2 WHERE id = $3',
    [name, description, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Project modified with ID: ${id}`)
    }
  )
}

// This is HARD DELETE. Meaning that when you delete the project
//  you also delete all of the associated experiments
const deleteProject = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM experiments WHERE project = $3', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Experiments deleted associated with project: ${id}`)
  })

  pool.query('DELETE FROM project_members WHERE project_id = $3', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User's removed from project: ${id}`)
  })

  pool.query('DELETE FROM projects WHERE id = $3', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Project deleted with ID: ${id}`)
  })
}

module.exports = {
  getProjects,
  getProjectsByID,
  createProject,
  updateProject,
  deleteProject,
}