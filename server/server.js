const express = require('express')
require('dotenv').config()
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const cors = require('cors')
const models = require('./db/models')
const db = require('./db')
const passportConfig = require('./services/auth')
const MongoStore = require('connect-mongo')(session)
const schema = require('./schema/schema')
const ParseService = require('./services/parseJobLink')

const { MONGO_URI } = process.env

let browser = null
ParseService.openBrowser(browser)
db.connect()
// Create a new Express application
const app = express()

const corsMiddleware = cors({
  origin: 'http://localhost:3000',
  credentials: true,
  preflightContinue: false
})
app.use(corsMiddleware)
app.options(corsMiddleware)

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
