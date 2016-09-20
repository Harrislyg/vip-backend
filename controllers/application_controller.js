const User = require('../models/user')
const basicAuth = require('basic-auth')

function userLoggedIn (req, res, next) {
  const userEmail = req.get('User-Email')
  const authToken = req.get('Auth-Token')
  console.log(basicAuth)
  if (!userEmail || !authToken) return res.status(401).json({error: 'unauthorised'})

  User.findOne({email: userEmail, auth_token: authToken}, (err, user) => {
    if (err || !user) return res.status(401).json({error: 'unauthorised'})

    req.currentUser = user
    next()
  })
}

// The following method allows the authentication token to be passed as HTTP basic authentication header, custom headers or in the query string or body
function userLoggedInAdvanced (req, res, next) {
  // first check if we have HTTP Basic Auth
  const auth = basicAuth(req)
  let userEmail, authToken
  if (auth) {
    userEmail = auth.name
    authToken = auth.pass
  } else {
    // else we just look in the http header or body or params
    userEmail = req.get('User-Email') || req.body.user_email || req.query.user_email
    authToken = req.get('Auth-Token') || req.body.auth_token || req.query.auth_token
  }

  console.log(auth)
  if (!userEmail || !authToken) return res.status(401).json({error: 'unauthorised'})

  User.findOne({email: userEmail, auth_token: authToken}, (err, user) => {
    if (err || !user) return res.status(401).json({error: 'unauthorised'})

    req.currentUser = user
    next()
  })
}

// showUser allows us to get a unique user bsed on the id provided in the params
function showUser (req, res) {
  console.log(req.params.id)
  User.findById(req.params.id, function (err, user) {
    if (err) return res.status(401).json({error: '/users users/:id error 1'})
    res.status(200).json({user: user})
  })
}

function roleUser (req, res) {
  User.find({role: req.params.role}, function (err, usersArray) {
    if (err) return res.status(401).json({error: '/users/role/:role error 1'})
    res.status(200).json({usersArray: usersArray})
  })
}

function updateProfile (req, res, next) {
  User.findOne({email: req.currentUser.email}, (err, user) => {
    if (err) res.status(401).json({error: 'Cannot find user'})
    else {
      user.name = req.body.name
      user.email = req.body.email
      user.password = req.body.password
      user.role = req.body.role
      user.summary = req.body.summary

      user.save(function (err) {
        if (err) res.status(400).json({error: 'Cannot update user'})
        res.status(200).json(user)
        next()
      })
    }
  })
}

function getProfile (req, res) {
  User.findOne({email: req.currentUser.email}, (err, user) => {
    if (err) return res.status(401).json({error: 'Cannot find user'})
    else {
      res.status(200).json({userData: req.currentUser})
    }
  })
}

module.exports = {
  userLoggedIn: userLoggedInAdvanced,
  showUser: showUser,
  roleUser: roleUser,
  updateProfile: updateProfile,
  getProfile: getProfile
}
