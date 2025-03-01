import User from "../models/auth.modal.js";
import bcrypt from 'bcryptjs'

export const signup = async ( res, req ) => {
    const {fullName,password,email} = req.body;
    try{
        if(password.length<6){
            return res.status(400).json({msg:'please enter the valid password'})
        }
        const user = await User.findOne({email})
        if(user)res.status(400).json({msg:'this user already exist'})
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.genSalt.hash(password,salt)
        const newUser = await new User({
            email,
            password:hashedPassword,
            fullName
        })
        if(newUser){

        }else{
            res.status(400).json({msg:'please enter right creadentials'})
        }
    }catch(err){

    }
}
export const login = ( res, req ) => {
    res.send('signup')
}
export const logout = ( res, req ) => {
    res.send('signup')
}