require('dotenv').config()
const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL

mongoose.connection.once('open', () => {
 console.log("Connection is ready")
})

mongoose.connection.on('error', (error) => {
 console.error(error)
})

async function connectMongo() {
 mongoose.connect(MONGO_URL)
}

async function disconnectMongo() {
 mongoose.disconnect()
}

module.exports = { 
 connectMongo,  
 disconnectMongo
}