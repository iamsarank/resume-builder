import User from '../models/UserSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const generateToken = user => {
    return jwt.sign({id:user._id, email:user.email}, process.env.JWT_SECRET_KEY,{
        expiresIn:'15d'
    })
}

export const register = async (req, res) => {
    const { email, password, name, photo, gender } = req.body

    try {
        let user = null
        user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exist' })
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        user = new User({
            name,
            email,
            password: hashPassword,
            photo,
            gender,
        })
        await user.save()
        res.status(200).json({ success: true, message: 'User successfully created' })

    } catch (err) {
        res.status(500).json({ success: false, message: 'Internal server error, Try again' })
    }
}


export const login = async (req, res) => {
    const { email } = req.body

    try {
        let user = null;
        user = await User.findOne({ email })

        if (!user) { 
            return res.status(404).json({message:"User not found"})
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordMatch){
            return res.status(404).json({status:false, message:"Invalid Credentials"})
        }
        const token = generateToken(user)
        const {password, ...rest} = user._doc
        res.status(200).json({status:true, message:"Successfully Login",token, data:{...rest}});

    } catch (err) {
        res.status(500).json({ status: false, message: "Failed to Login" })
    }
}