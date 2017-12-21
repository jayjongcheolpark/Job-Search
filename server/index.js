const express = require('express')
const utils = require('./utils/parseURL')

const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

utils.initBrowser().then(page => {
  require('./routes/parseURLRoutes')(app, page)
})

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'))

  // Express will serve up the index.html file
  // if doesn't recognize the route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
