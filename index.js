const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const { mainRoutes, apiRoutes } = require('./routes')

// setup route middlewares
app.use(express.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(helmet({ crossOriginResourcePolicy: true }))

// routes
app.use('/', mainRoutes)

// api routes
app.use('/api', apiRoutes)

app.listen(port, () => {
  console.log(`Server app listening at port:${port}`)
})
