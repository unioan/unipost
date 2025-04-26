const {
 getPostsModel,
 addPostModel,
 deletePostModel,
 posts
} = require('../../models/post')
const path = require('path')

let isAddPostShown = false

async function getPosts(req, res) {
 if (req.query.isAddPostShown !== undefined) {
  isAddPostShown = req.query.isAddPostShown === "true";
 }

 res.render(path.join(__dirname, '../../views/post/indexPost.ejs'), {
  isAddPostShown: isAddPostShown,
  posts: await getPostsModel() || []
 });
}

async function addPost(req, res) {
 await addPostModel(req.body)
 res.redirect('/posts');
}

async function deletePost(req, res) {
 const { id } = req.params
 await deletePostModel(parseInt(id))
 res.redirect('/posts');
}

module.exports = {
 getPosts,
 addPost,
 deletePost,
}