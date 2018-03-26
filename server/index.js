import express from 'express'
import { Nuxt, Builder } from 'nuxt'

// account imports
import passport from 'passport'
import Sequelize from 'sequelize'
import connection from './configs/sequelize'
const LocalStrategy = require('passport-local').Strategy
import session from 'express-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import flash from 'connect-flash'

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import API Routes
app.use('/api', api)

// ============================
// Account log in/out

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'our secret string'}));
app.use(cookieParser());
app.use(passport.initialize()); // <-- Register the Passport middleware.

const User = connection.define('users', {
  userid: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  username: Sequelize.STRING(32),
  password: Sequelize.TEXT
})

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({
      where: {username: username, password: password},
      attributes: ['userid', 'username', 'password', 'permission']
    })
    .then(user => {
      if (user !== null) {
        return done(null, user)
      } else {
        return done('User not found')
      }
    })
}))

app.post('/login',
  (req,res,next) => {
    // Ex passport obj { user: { userid: 5, username: 'atsushi', password: 'cs304' } }
    if (req.session && req.session.passport) {
      console.log('Passport: user is logged in: ', req.session.passport);
    } else {
      console.log('Passport: user not logged in');
    }

    // Required for local passport to initiate
    req.body.username = req.body.data.username
    req.body.password = req.body.data.password
    passport.authenticate('local', {
      failureRedirect: '/login',
    })(req,res,next)
  },
  // This is called if login is successful
  function (req, res) {
    // console.log("body parsing ======\n", req);
    res.status(200).send(req.session.passport)
  }
)

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/'); //Can fire before session is destroyed?
});

// ============================

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
