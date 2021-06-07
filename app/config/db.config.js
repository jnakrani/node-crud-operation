const mongoose = require('mongoose')
// mongoDB connection url
const connect = 'mongodb+srv://test:test123@cluster0.vdwtb.mongodb.net/${dbname}?retryWrites=true&w=majority';

const connection = mongoose.connect(connect, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then(() => {
    console.log('Databse connecticon successfully')
}).catch((err) => {
    console.log("Database connection faild")
})
module.exports = connection