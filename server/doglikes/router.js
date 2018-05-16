const DogLikes = require('./model')
const Router = require('express').Router

const router = new Router()

router.post('/doglikes', (req, res) => {

  const doglike = {
    userid: req.body.userid,
    breed: req.body.breed
  }
console.log("who let te dogs out")
  DogLikes.create(doglike)
    .then(entity => {
      res.send({
        userid: entity.userid,
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