const { getPersonController, setPersonController } = require('../controllers')

const routes = require('express').Router()

routes.get('/user', getPersonController)

routes.post('/user', setPersonController)

module.exports = routes