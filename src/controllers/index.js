const { getPersonService, setPersonService } = require('../services')

exports.getPersonController = (req, res) => {
  return getPersonService(req, res)
}

exports.setPersonController = (req, res) => {
  return setPersonService(req, res)
}
