const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World 2!</h1>')
})

const PORT = 80

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})