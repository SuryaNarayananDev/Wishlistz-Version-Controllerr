const { app } = require(".");
const { connectDb } = require("./config/db");

const PORT=5454;
app.listen(PORT,async ()=>{
    await connectDb()
    console.log("WishListz api listing on port ",PORT)
})