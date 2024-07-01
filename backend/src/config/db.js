const mongoose = require("mongoose")

const mongoDbUrl="mongodb://localhost:27017/wishlistz"
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}