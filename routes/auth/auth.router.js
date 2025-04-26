const express = require('express')
const path = require('path')
const { formAuthUser } = require('./auth.controller')
const formRouter = express.Router()

formRouter.get('/', (req, res) => {
 res.render(path.join(__dirname, '../../views/auth/indexAuth.ejs'), {
  login_stage: 'initiate'
 })
})

formRouter.post('/', (req, res) => {
 const { login, password } = req.body
 const isAuthenticated = formAuthUser(login, password)
 if (isAuthenticated) {
  res.render(path.join(__dirname, '../../views/auth/indexAuth.ejs'), {
   login_stage: 'success'
  })
 } else {
  res.status(404).render(path.join(__dirname, '../../views/auth/indexAuth.ejs'), {
   login_stage: 'failed'
  })
 }
})

module.exports = formRouter