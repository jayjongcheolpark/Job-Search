const express = require('express')
const models = require('./models')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const passportConfig = require('./services/auth')
const MongoStore = require('connect-mongo')(session)
const schema = require('./schema/schema')
require('dotenv').config()

// Create a new Express application
const app = express()

// Replace with your mongoLab URI
const MONGO_URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${
  process.env.DB_HOST
}`

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise

// Connect to the mongoDB instance and log a message
// on success or failure
mongoose.connect(MONGO_URI)
mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', error => console.log('Error connecting to MongoLab:', error))

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  return next()
})

// Configures express to use sessions.  This places an encrypted identifier
// on the users cookie.  When a user makes a request, this middleware examines
// the cookie and modifies the request object to indicate which user made the request
// The cookie itself only contains the id of a session; more data about the session
// is stored inside of MongoDB.
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: 'aaabbbccc',
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 },
    store: new MongoStore({
      url: MONGO_URI,
      autoReconnect: true
    })
  })
)

// Passport is wired into express as a middleware. When a request comes in,
// Passport will examine the request's session (as set by the above config) and
// assign the current user to the 'req.user' object.  See also servces/auth.js
app.use(passport.initialize())
app.use(passport.session())

// Instruct Express to pass on any request made to the '/graphql' route
// to the GraphQL instance.
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
)

module.exports = app
