const { format } = require('date-fns')
const posts = require('./post.mongo')

async function getPostsModel() {
 return posts.find({}, '-__v').sort({ _id: -1 })
}

async function addPostModel(post) {
 const id = Date.now();
 return posts.create({
  ...post,
  id,
  date: format(new Date(), 'dd.MM.yyyy HH:mm')
 })
}

async function deletePostModel(id) {
 return posts.deleteOne({ id })
}

module.exports = {
 getPostsModel,
 addPostModel,
 deletePostModel,
 posts
}


/* 
{
 title: "New title",
 content: "I have been there and there",
 data: new Data(),
 id
}
*/