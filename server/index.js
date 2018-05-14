const express = require('express')
const app = express()

var Sequelize = require('sequelize')
var sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres')


const Users = sequelize.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  tableName: 'users',
  timestamps: false
})

app.listen(4001, () => console.log('Express API listening on port 4001'))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})

Users.findById(1).then(users => console.log(JSON.stringify(users)))

app.get('/users', (request, response) => {
  console.log("we r finding the products")
  Users.findAll({
    attributes: [ 'id', 'name', 'email' ]
  })

.then(result => {
  response.send({ result })
})

.catch(err => {
  response.status(500).send({
    message: 'Something went wrong!',
  })
})
})

app.post('/users', (request, response) => {
  const users = request.body
  Users.create(user)
    .then(result => {
      response.send({ result })
    })
    .catch(error => {
      response.status(500).send({
        mesage: 'something went wrong with postgres',
        details: error.message
      })
    })
})

app.get('/users/:id', (request, response) => {
  const userId = request.params.id
  Users.findById(userId)
    .then(result => {
      response.send(result)
    })
    .catch(error => {
      response.status(500).send({
        message: 'something went wrong with postgres',
        details: error.message
      })
    })
})
