const { port } = require('./configs')
const app = require('./app')

app.listen(port, () => {
  console.log(`server ready...`)
})
