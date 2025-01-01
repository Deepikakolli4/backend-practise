const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.DB_URL;
console.log(url);
const dbConnect = async()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log('connected to db');
    })
    .catch(()=>{
        console.log('error');
    })
}
module.exports = dbConnect;