const Sequelize = require('sequelize')
const sequelize = require('../db')

const DogLikes = sequelize.define(
  'doglikes',
  {
    userid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    breed: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'doglikes',
    timestamps: false
  }
)

module.exports = DogLikes
