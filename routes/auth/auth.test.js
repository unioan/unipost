const request = require('supertest') // makes HTTP requests
const app = require('../../app')

describe('Test GET method on formRouter', () => {
  test('Must response with 200', async () => {
    const response = await request(app)
      .get('/auth')
      .expect(200)

    console.log('GET /auth response body:', response.text);
    console.log('GET /auth status:', response.status);
  })
})

describe('Test POST method on formRouter', () => {
  test('Must authorize client and response with 200', async () => {
    const response = await request(app)
      .post('/auth')
      .type('form')
      .send({ login: "admin", password: "admin" })
      .expect(200)

    console.log('POST /auth response body:', response.text);
  })

  test('Must deny client and response with 404', async () => {
    const response = await request(app)
      .post('/auth')
      .type('form')
      .send({ login: "somelogin", password: "somepass" })
      .expect(404)
  })
})