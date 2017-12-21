const express = require('express')
const Sequelize = require('sequelize')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')

const parseUtils = require('./utils/parseURL')

const SequelizeStore = require('connect-session-sequelize')(session.Store)

const Op = Sequelize.Op;
const sequelize = new Sequelize('postgres', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: Op, // use Sequelize.Op
})
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

const app = express()
app.use(cookieParser())
app.use(
  session({
    secret: 'boj hcraes',
    store: new SequelizeStore({
      db: sequelize
    }),
    resave: false,
    saveUninitialized: false
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

parseUtils.initBrowser().then(page => {
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
const server = app.listen(PORT)

// this function is called when you want the server to die gracefully
// i.e. wait for existing connections
var gracefulShutdown = function() {
  console.log("Received kill signal, shutting down gracefully.");
  server.close(async function() {
    console.log("Closed out remaining connections.");
    process.exit()
  });

   // if after
   setTimeout(function() {
       console.error("Could not close connections in time, forcefully shutting down");
       process.exit()
  }, 10*1000);
}

// listen for TERM signal .e.g. kill
process.on ('SIGTERM', gracefulShutdown);

// listen for INT signal e.g. Ctrl-C
process.on ('SIGINT', gracefulShutdown);