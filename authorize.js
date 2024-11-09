const authorize = (req, res, next) => {
  const { user } = req.query

  if (user) {
    req.user = { name: 'immi', id: 34 }
    next() // Moving towards our route from here
  } else {
    res.send('<h1>UnAuthorized User 🔴</h1>')
  }
}

module.exports = authorize
