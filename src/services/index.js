const User = require('../db/user')

exports.getPersonService = async (req, res) => {
  try {
    const users = await User.find()
    if (!users.length) {
      return res.status(404).json({ message: 'No se encontro ningun usuario' })
    }

    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor" })
  }
}

exports.setPersonService = async (req, res) => {
  const { name, email } = req.body

  if (!name) {
    return res.status(403).json({ message: 'Ingrese su nombre' })
  }

  if (!email) {
    return res.status(403).json({ message: 'Ingrese un email' })
  }

  try {
    const user = await User.findOne({ email })
    if (user?.email === email) {
      return res.status(403).json({ message: 'Ya existe un usuario registrado con ese email' })
    }

    const newUser = new User({ email, name })

    newUser.save()
    res.status(200).json({ message: 'Usuario creado correctamente.' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Error en el servidor" })
  }
}