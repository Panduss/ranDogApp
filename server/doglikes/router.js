const DogLikes = require('./model')
const Router = require('express').Router

const router = new Router()


router.post('/doglikes', (req, res) => {
  console.log(req.body)

  const doglike = {
    userid: req.body.userId,
    breed: req.body.breed
  }

  DogLikes.create(doglike)
    .then(entity => {
      res.send({
        breed: entity.breed,
        id: entity.id
      })
    })
    .catch(err => {
      console.error(err)
      res.status(500).send({
        message: 'Something went wrong'
      })
    })
})

router.get('/doglikes', (req, res) => {
  DogLikes.findAll({
    attributes: ['id', 'userid', 'breed']
  })
  .then(result => {
    res.send(result)
  })
  // const match = {
  //   userid:
})



router.get('/doglikes/:id', (request, response) => {
  const houseId = request.params.id
console.log('getting dog')
  client.query('SELECT * FROM doglikes WHERE id = $1', [doglikesId], (error, result) => {
    if (error) {
      response.status(500).send({
        message: 'Something went wrong with Postgres!',
        details: error.message
      })
    } else if (result.rows[0]) {
      response.send(result.rows[0])
    } else {
      response.status(404).send({
        message: 'House not found!'
      })
    }
  })
})


module.exports = router
