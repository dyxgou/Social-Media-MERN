import express from "express"
import Post from "../models/Post.model.js"
import UserModel from "../models/User.model.js"


// Todo: This is the router of the posts section of the social media 
const router = express.Router()

// ? Create a post 

router.post("/" , async(req , res) =>
{
  const newPost = new Post(req.body)

  try
  {
    const savedPost = await newPost.save()
    res.status(201).json(savedPost)
  }
  catch(err)
  {
    res.status(500).json(err)
  }
})

// ? Update a post 

router.put("/:id" , async (req , res) =>
{
  try
  {
    const post = await Post.findById(req.params.id)

    if(post.userId === req.body.userId)
    {
      await post.updateOne(
        {
          $set : req.body 
        }
      )

      res.status(200).json("The post has been updated")
    }
    else
    {
      res.status(403).json("You can't update posts of somebody else you")
    }
  }
  catch(err)
  {
    res.status(500).json(err)
  }

  
})

// ! Delete a post 

router.delete("/:id" , async(req , res) =>
{
  try
  {

    const post = await Post.findById(req.params.id)
    // * if we're the owner of the post or we've owner permissions, we can delete this post 
    if(post.userId === req.body.userId || req.body.isAdmin)
    {
      await post.deleteOne()
      res.status(200).json("The post has been deleted")
    }
    else
    { // * Other way, we can't delete it
      res.status(403).json("You only can delete your post")
    }
  }
  catch(err)
  {
    res.status(500).json(err)
  }
})

// ? Like a post 

router.put("/:id/like" , async( req , res )=>
{
  try
  {
    const post = await Post.findById(req.params.id);
    if(!post.likes.includes(req.body.userId))
    {
      await post.updateOne(
        {
          $push : 
          {
            likes : req.body.userId
          }
        }
      )
      res.status(200).json("The post has been liked")
    }
    else
    {
      await  post.updateOne(
        {
          $pull :
          {
            likes : req.body.userId
          }
        }
      )
      res.status(200).json("The post has been disliked")
    }
  }
  catch(err)
  {
    res.status(500).json(err)
  }
})

// ? Get a Post 

router.get("/:id" , async(req , res) =>
{
  try
  {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } 
  catch(err)
  {
    res.status(500).json(err)
  }
})

// ? get timelime post 

router.get("/timeline/:userId" , async(req , res )=>
{
  //let postArray = []
  try
  {
    const currentUser = await UserModel.findById(req.params.userId)
    const userPost = await Post.find({ userId : currentUser._id })
    const friendPosts =  await Promise.all(
      currentUser.followings.map(friendId => 
        {
          return Post.find(
            {
              userId : friendId
            }
          )
        }
      )
    )

    res.status(200).json(userPost.concat(...friendPosts))
  }
  catch(err)
  {
    res.status(500).json(err)
  }
})

export default router