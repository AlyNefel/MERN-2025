import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const register =async(req,res)=>{
    const {username,email,password}=req.body;
    try {
        // we will check if a user with the same email exists
        let user=await User.findOne({email});
        if(user) return res.status(400).json({msg:'User already exits !'})
        
            // if there ius no user with this email :
              //we will hash the password using bcrypt
              user=new User({username,email,password});
              // generate slat 
              const salt = await bcrypt.genSalt(10);
              //hash the password 
              user.password=await bcrypt.hash(password,salt)
              // save user 
              await user.save()

              //Token generation ? 
                 // generate the payload : where the data of user will exist
                 const payload={user :{id:user._id,username:user.username}};

                 // we will create our signature 
                 jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1h'},(err,token)=>{
                    if(err) throw err;
                    res.json({token})
                 })
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

export const login =async (req,res)=>{
    const {email,password}=req.body
    try {
        //check if the email exits 
        let user=await User.findOne({email});
        if(!user)return res.status(400).json({msg:'email not found '})
            // we will check the password if the y match using bcrypt
        const match=await bcrypt.compare(password,user.password)
        // if they don't match we will return message
        if(!match) return res.status(400).json({msg:'echeck ur password'})
            const payload={user :{id:user._id,username:user.username},test:"test"};

        // we will create our signature and generate a token 
        jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:'1h'},(err,token)=>{
           if(err) throw err;
           res.json({token,user:user})
        })        
           
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

export const getUser=async(req,res)=>{
   return res.json({username:req.user.username})
}