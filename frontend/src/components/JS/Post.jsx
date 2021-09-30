import "../CSS/Post.css"
import {Avatar, IconButton} from "@mui/material"
import { Settings } from "@mui/icons-material"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useState } from "react";
import axios from "../../data/axios"
import { format } from "timeago.js"

const Post = ({ post }) => {

  const [ user , setuser ] = useState({})

  useEffect(() =>
  {
    const fetchUser = async () =>
    {
      const res = await axios.get(`users/${post.userId}`)
      return setuser(res.data)
    }
    return fetchUser()
  } , [post.userId])
  

  const useLiked = ({ initialState , initialClickState }) =>
  {
    const [ value , setValue ] = useState(initialState)
    const [ isClicked , setIsClicked] = useState(initialClickState)

    const valueHandler = () =>
    {
      if(isClicked)
      {
        setValue(value - 1)
        setIsClicked(!isClicked)
      }
      else
      {
        setValue(value + 1)
        setIsClicked(!isClicked)
      }
    }

    return {
      value , 
      valueHandler
    }
  }

  const likeIt = useLiked({ initialState:post.likes.length , initialClickState:false })
  const loveIt = useLiked({ initialState:post.likes.length , initialClickState:false })
  

  return (
    <div className="post" >
      <div className="post__config">
        <div className="post__user" >
          { user.profilePicture ? (
            <Avatar src={user?.profilePicture} />
          ) : (
            <Avatar/>
          ) }
          <h3>{user?.username}</h3>
          <p>{format(post?.createdAt)}</p>

        </div>
        <IconButton>
          <Settings />
        </IconButton>
      </div>

            
      <div className="post__content">

        { post.desc && <p> { post.desc } </p> }

        { post.img && <div onDoubleClick={loveIt.valueHandler} >
          <img 
          src={post.img} 
          alt="It is the imagePost" 
          className="post__image" /> 
        </div>
          
        }
      </div>

      <div className="post__bottom">
        <div className="post__bottomLeft">
          <div className="post__likeIcon"
            onClick={likeIt.valueHandler}
          >
            <IconButton  >
              <ThumbUpAltIcon style={
                {
                  color:"#7986ff"
                }
              } />
            </IconButton>

            <span> {likeIt.value} </span>
          </div>
          <div className="post__likeIcon"
            onClick={loveIt.valueHandler}
          >
            <IconButton>
              <FavoriteIcon 
                style={
                  {
                    color: "#f84294"
                  }
                }
              />
            </IconButton>

            <span> {loveIt.value} </span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Post
