const express = require('express')
const postRouter = express.Router()
const {
 getPosts,
 addPost,
 deletePost
} = require('./post.controller')

// должен вернуть страницу со всеми постами
postRouter.get('/', getPosts)
postRouter.post('/', addPost)
postRouter.delete('/:id', deletePost)

module.exports = postRouter