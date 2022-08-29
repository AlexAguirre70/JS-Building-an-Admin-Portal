require('dotenv').config()
const mongoose= require('mongoose')

mongoose.connect(process.env.Mongo_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
})

module.exports.Book = require('./books')