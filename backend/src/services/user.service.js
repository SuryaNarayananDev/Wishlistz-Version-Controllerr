const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model.js');
const jwtProvider=require("../config/jwtProvider.js")

const createUser = async (userData)=>{
    try {

        let {firstName,lastName,email,password,role,ph,gender}=userData;

        const isUserMailExist=await User.findOne({email});
        const isUserNumExist=await User.findOne({ph});


        if(isUserMailExist){
            throw new Error("User already exist with email ",email,ph)
        }else if (isUserNumExist) {
            throw new Error("User already exist with Number",email,ph)
        }else if (!isUserMailExist&&!isUserNumExist) {
            password=await bcrypt.hash(password,8);
    
        const user=await User.create({firstName,lastName,email,password,role,ph,gender})

        console.log("user ",user)
    
        return user;
        
        }{
            throw new Error("user already exist with email : ",email,ph)
        }

    } catch (error) {
        console.log("error - ",error.message)
        throw new Error(error.message)
    }

}

const updateUserPassword=async(userId)=>{
    try{
        const user = await User.findById(userId);
    }
    catch
    {
        console.log("pending user up");
    }
}

const findUserById=async(userId)=>{
    try {
        const user = await User.findById(userId);
        if(!user){
            throw new Error("user not found with id : ",userId)
        }
        return user;
    } catch (error) {
        console.log("error :------- ",error.message)
        throw new Error(error.message)
    }
}

const getUserByEmail=async(email)=>{
    try {

        const user=await User.findOne({email});

        if(!user){
            throw new Error("User Not Exit ",email)
        }

        return user;
        
    } catch (error) {
        console.log("error - ",error.message)
        throw new Error(error.message)
    }
}

const getUserProfileByToken=async(token)=>{
    try {

        const userId=jwtProvider.getUserIdFromToken(token)



        const user= (await findUserById(userId)).populate("addresses");
        user.password=null;
        
        if(!user){
            throw new Error("user not exist with id : ",userId)
        }
        return user;
    } catch (error) {
        console.log("error ----- ",error.message)
        throw new Error(error.message)
    }
}

const getAllUsers=async()=>{
    try {
        const users=await User.find();
        return users;
    } catch (error) {
        console.log("error - ",error)
        throw new Error(error.message)
    }
}
const updateUserOtp=async(user,otp)=>{
    try {
        user.otp=otp;
        await user.save();
        return user;
        } catch (error) {
            console.log("error - update Otp in user service",error)
            throw new Error(error.message)
            }


}

module.exports={
    createUser,
    findUserById,
    getUserProfileByToken,
    getUserByEmail,
    getAllUsers,
   
}