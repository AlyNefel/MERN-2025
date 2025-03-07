import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const authMiddleware=(req,res,next)=>{
    const token=req.header('x-auth-token')
    //if there is no token 
    if(!token)return res.status(400).json({msg:"no Token ,authorization denied !"})

        try {
            // decode my token 
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user=decoded.user
            next();
        } catch (error) {
            res.status(401).json({ msg: 'Token is not valid' });
        }
}