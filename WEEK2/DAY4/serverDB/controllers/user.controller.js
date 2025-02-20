import User from'../models/user.model.js'

// get all users
// get used to the async & await // use try and catch block always
const getAllUsers= async(req,res)=>{
try {
    // we will declare a variable to hold our list of users
    const users=await User.find()
    res.json(users)
     
} catch (error) {
    res.status(500).json(error)
    // custom message error  res.status(500).json({message:"This is a custom error !!"})
}

}

// get one user by Id
const getUserById=async (req,res)=>{
    try {
        // the id will be passed in req.params
        console.log("req.params",req.params)
        const user=await User.findById(req.params.id)
        // we will test if the user exists
        if(user){
 // if true we will send a response with the user
     res.status(200).json(user)
        }else {
            // else we will send respons with status
            res.status(404).json({message:"Stop using the url !!"})

        }
    } catch (error) {
        res.status(500).json(error)
    }
}

// create user
const createUser=async(req,res)=>{
    try {
        //get the user to create 
        // another way to create:  const newUser = await User.create(req.body);
        const userToCreate= new User(req.body)
        //to insert
        await userToCreate.save()
        res.status(201).json(userToCreate)

    } catch (error) {
        res.status(500).json(error)
    }
}

// update user By id
const updateUser=async (req,res) => {
    try {
        const userToUpdate=await User.findByIdAndUpdate(req.params.id,req.body,{
            runValidators:true,
            new:true
    
        })
        // we will test if userToUpdate exists will be skipped now 
        res.json(userToUpdate)
    } catch (error) {
        res.status(500).json(error)
    }
}

// delete user 
const deleteUser=async (req,res) => {
    try {
        //User.findOneAndDelete({name:"ali"})
        const userToDelete=await User.findByIdAndDelete(req.params.id)
        if(userToDelete){
            res.status(200).json({message:"the user deleted !"})
        }else{
            res.status(404).json({message:"Stop using the url directly !"})
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

export {
    getAllUsers,
    getUserById,
    deleteUser,
    updateUser,
    createUser
}