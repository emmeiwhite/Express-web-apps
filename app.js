/** Express : A lightweight framework build on top of Node.js to create web applications easily */

const express = require('express')
const app = express()

// First Route
app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello World!</h1>')
})

app.listen(3300, () => {
  console.log('The app is listening on port 3300')
})
