const express = require('express')
const app = express()

// render files
app.use(express.static(`${__dirname}/public`))

module.exports = app
