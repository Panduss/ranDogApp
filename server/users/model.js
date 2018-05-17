const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define(
  'user',
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    likes: {
      type: Sequelize.STRING,
      allowNull: true
    }
  },
  {
    tableName: 'users',
    timestamps: false
  }
)

module.exports = User
