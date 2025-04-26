const express = require('express')
const cors = require('cors')
const formRouter = require('./routes/auth/auth.router')
const postRouter = require('./routes/post/post.router')
const methodOverride = require('method-override')
const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/auth', formRouter)
app.use('/posts', postRouter)

app.get('/', (req, res) => {
 res.redirect('/auth')
})

module.exports = app