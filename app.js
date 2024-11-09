/** Express : A lightweight framework build on top of Node.js to create web applications easily */

const express = require('express')
const app = express()

// Import data
const products = require('./data/products')
const todos = require('./data/todos')

const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')

// Middleware- logger to be used with app.use()
// app.use([logger, authorize])

/** Middleware 3 types:
 * 1) Own one's written by the developer
 * 2) Those provided by the express library like express.static('./public')
 * 3) Third-Party Middlewares
 *  */

app.use(morgan('pity'))

// First Route
app.get('/', (req, res) => {
  console.log(req.user)
  res.status(200).send('<h1>Hello World!</h1>')
})

// Second Route
app.get('/about', (req, res) => {
  res.status(200).send('<h1>About Page!</h1>')
})

// api specific routes

app.get('/api/products', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: products
  })

  // We have added the user to the request object
  console.log(req.user)
})

app.get('/api/todos', (req, res) => {
  res.status(200).send({
    status: 'success',
    data: todos
  })
})

app.listen(3300, () => {
  console.log('The app is listening on port 3300')
})
