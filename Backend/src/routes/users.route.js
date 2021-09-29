import express from "express";
import bycrypt   from "bcrypt"
import User from "../models/User.model.js"

const router = express.Router()

// Update User

router.put("/:id" , async (req , res) =>
{
  if(req.body.userId === req.params.id || req.body .isAdmin)
  {
    if(req.body.password)
    {
      try
      {
        const salt = await bycrypt.genSalt(10)
        req.body.password = await bycrypt.hash(req.body.password , salt)
      }
      catch(err)
      {  
        return res.status(500).json(err)
      }    
    }
    try
    {
      await User.findByIdAndUpdate(req.params.id , 
        {
          $set: req.body
        }
      )

      res.status(200).json("Account has been updated")
    }
    catch(err)
    {
      res.status(500).json(err)
    }
  }
  else
  {
    return res.status(403).json("You can only update your account!")
  }
})


// Delete User

router.delete("/:id" , async(req , res) =>
{
  if(req.body.userId === req.params.id || req.body.isAdmin)
  {
    try
    {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("The Account has been deleted")
    }
    catch(err)
    {
      return res.status(403).json("Has been happened an error")
    }
  }
  else
  {
    res.status(403).json("You only can delete your account")
  }
})
// Get an user

router.get("/:id" , async (req , res) =>
{
  try
  {
    const user = await User.findById(req.params.id)
    const { password , updatedAt , ...other } = user._doc
    res.status(200).json(other)
  }
  catch(err)
  {
    return res.status(500).json(err)
  }
})


// Follow an user

router.put("/:id/follow" , async (req , res) =>
{
  // ? If the user aren't the same people, This person can follow somebody else 
  if(req.body.userId !== req.params.id)
  {
    // ? Here
    try
    {
      const user = await User.findById(req.params.id)
      const currentUser =  await User.findById(req.body.userId)

      if(!user.followers.includes(req.body.userId))
      {
        await user.updateOne(
          {
            $push : 
            {
              followers : req.body.userId
            }
          }
        )
        await currentUser.updateOne(
          {
            $push : 
            {
              followings : req.params.id
            }
          }
        )

        res.status(201).json("The user has been followed")
      }
      else
      {
        res.status(403).json("You're following this user")
      }
    }
    catch(err)
    {
      res.status(500).json(err)
    }
  }
  else
  {
    res.status(403).json("The can't follow yourself")
  }
} )

// Unfollow an user


router.put("/:id/unfollow" , async (req , res) =>
{
  // ? If the user aren't the same people, This person can follow somebody else 
  if(req.body.userId !== req.params.id)
  {
    // ? Here
    try
    {
      const user = await User.findById(req.params.id)
      const currentUser =  await User.findById(req.body.userId)

      if(user.followers.includes(req.body.userId))
      {
        await user.updateOne(
          {
            $pull : 
            {
              followers : req.body.userId
            }
          }
        )
        await currentUser.updateOne(
          {
            $pull : 
            {
              followings : req.params.id
            }
          }
        )

        res.status(201).json("The user has been unfollowed")
      }
      else
      {
        res.status(403).json("You don't follow this user")
      }
    }
    catch(err)
    {
      res.status(500).json(err)
    }
  }
  else
  {
    res.status(403).json("The can't unfollow yourself")
  }
} )


export default router
