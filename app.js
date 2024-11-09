/** Express : A lightweight framework build on top of Node.js to create web applications easily */

const express = require('express')
const app = express()

// Import data
const products = require('./data/products')
const todos = require('./data/todos')

const logger = require('./logger')

// Middleware- logger to be used with app.use()
app.use(logger)

// First Route
app.get('/', (req, res) => {
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
