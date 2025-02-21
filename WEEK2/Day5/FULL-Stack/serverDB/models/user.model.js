import mongoose from 'mongoose'

// we will define user schema

const userSchema= new mongoose.Schema(
  {
  firstName:{
    type:String,
    required:true,
    minlength: 2
  },
  email:{
    type:String,
    unique:true
  },

} ,
{
    timestamps: true  // Automatically add createdAt and updatedAt fields
  })
const User=mongoose.model('User',userSchema)
export default User