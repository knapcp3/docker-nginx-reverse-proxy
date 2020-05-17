const express = require('express')
const app = express()
const port = 3000
const data = 'data from the service'

app.get('/api/', (req, res) => res.send({ data }))
app.listen(port, () => console.log(`Listening on port ${port}`))

process.on('SIGINT', function () {
  process.exit()
})
