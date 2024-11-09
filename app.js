/** Express : A lightweight framework build on top of Node.js to create web applications easily */

const express = require('express')
const app = express()

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const year = new Date().getFullYear()
  console.log(method, url, year)

  res.send('<h2>TESTING MIDDLEWARE !!!</h2>')
}

// First Route
app.get('/', logger, (req, res) => {
  res.status(200).send('<h1>Hello World!</h1>')
})

// Second Route
app.get('/about', (req, res) => {
  res.status(200).send('<h1>About Page!</h1>')
})

app.listen(3300, () => {
  console.log('The app is listening on port 3300')
})
