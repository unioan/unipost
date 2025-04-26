const http = require('http')
const app = require('./app')
const { connectMongo } = require('./services/mongo')

const PORT = process.env.PORT || 3000

async function startServer() {
 await connectMongo()
 const server = http.createServer(app)

 server.listen(PORT, () => {
  console.log(`Server is running on: `, server.address())
 })
}

startServer()