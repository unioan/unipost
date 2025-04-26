const request = require('supertest') // makes HTTP requests
const app = require('../../app')
const { format } = require('date-fns')
const cheerio = require('cheerio');
const { connectMongo, disconnectMongo } = require('../../services/mongo')

describe('Launches API', () => {
 beforeAll(async () => {
  await connectMongo()
 })

 afterAll(async () => {
  await disconnectMongo()
 })

 const id = '1901719686636'

 describe('Test requests to postRouter', () => {
  test('Test GET on postRouter, must return 200', async () => {
   const response = await request(app)
    .get('/posts')

   expect(response.statusCode).toBe(200)
  })

  test('Test POST on postRouter, must redirect', async () => {
   const response = await request(app)
    .post('/posts')
    .type('form')
    .send({
     title: "Jest post request test",
     content: "test succeeded",
    })
    .expect(302)
  })

  test('Test DELETE on postRouter', async () => {
   const responseGET = await request(app).get(`/posts`)
   function getTestPostID() {
    const $ = cheerio.load(responseGET.text)

    const testPost = $('.list__item_header').filter((_, el) => {
     const title = $(el).find('h2').text().trim()
     const testTitle = 'Jest post request test'
     return title === testTitle
    })

    return testPost.find('form').attr('action').match(/\/posts\/(\d+)/)[1];
   }

   const postId = await getTestPostID()
   expect(postId).toBeTruthy()

   const responseDELETE = await request(app)
    .delete(`/posts/${postId}`)
    .expect(302)
  })
 })
})