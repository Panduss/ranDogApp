const DogLikes = require('./model')
const Router = require('express').Router

const router = new Router()

router.post('/doglikes', (req, res) => {
  console.log(req.body)
  const doglike = {
    userid: req.body.userid,
    breed: req.body.breed
  }

  DogLikes.create(doglike)
    .then(entity => {
      res.send({
        breed: entity.breed
      })
    })
    .catch(err => {
      console.error(err)
      res.status(500).send({
        message: 'Something went wrong'
      })
    })
})


module.exports = router
