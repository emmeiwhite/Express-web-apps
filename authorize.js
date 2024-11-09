const authorize = (req, res, next) => {
  const { user } = req.query

  if (user === 'imran') {
    req.user = { name: 'immi', id: 34 } // Adding a property of user on req object
    next() // Moving towards our route from here
  } else {
    res.status(401).send('<h1>UnAuthorized User 🔴</h1>')
  }
}

module.exports = authorize
