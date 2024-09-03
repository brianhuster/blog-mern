const {User} = require("../models");
const hashPassword = require("../utils/hashPassword");
const comparePassword = require("../utils/comparePassword");
const generateToken = require("../utils/generateToken");

const signup = async (req, res, next) => {
    try{
        const {name, email, password, role} = req.body;
        
        const isEmailExist = await User.findOne({email});
        if(isEmailExist) {
            return res.status(400).json({
                code: 400,
                status: false,
                message: "Email already exists"
            });
        }

        const hashedPassword = await hashPassword(password);

        const newUser = new User({name, email, password : hashedPassword, role}); 
        await newUser.save();
        res.status(201).json({
            code: 201,
            status: true,
            message: "User created successfully"
        });
    } catch(error) {
        next(error)
    }
}

const signin = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({
                code: 400,
                status: false,
                message: "Email or password is wrong"
            });
        }
        const match = await comparePassword(password, user.password);
        if(!match) {
            return res.status(400).json({
                code: 400,
                status: false,
                message: "Email or password is wrong"
            });
        }

        const token = generateToken(user);

        res.cookie("token", token, {httpOnly: true});

        res.status(200).json({
            code: 200,
            status: true,
            message: "Signin successfully",
            data: {
                token
            }
        });
    } catch(error) {
        next(error);
    }
}

module.exports = { signup, signin };
