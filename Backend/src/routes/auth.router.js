import express from "express"
import User from "../models/User.model.js"
import bcrypt from "bcrypt"

const router = express.Router()


// Register 

router.post('/register' , async (req , res)=>
{
  try
  {

    // ? Create the variables to encrypt the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword =  await bcrypt.hash(req.body.password , salt)

    // TODO Create the user Schema

    const newUser = new User(
      {
        username : req.body.username,
        email : req.body.email,
        password : hashedPassword
      }
    )

    // ? Send and save the user
    const user = await newUser.save()
    res.status(201).json(user)
    res.send("The user have had been register")
  }
  catch(err)
  {
    // ! Catch the errors if an error has been happened 
    console.log(err)
  }
})


router.post("/login" , async (req , res) =>
{
  try
  {
    // ? Confirm if the user exists
    const user = await User.findOne({
      email : req.body.email,
    })
    !user && res.status(404).json("User not found")

    const validPassword =  await bcrypt.compare(req.body.password , user.password)
    !validPassword && res.status(404).json("worng password")

    res.status(200).json(user)
  }
  catch(err)
  {
    res.status(500).json(err)
  }
})

export default router