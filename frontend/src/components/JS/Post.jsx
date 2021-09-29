import "../CSS/Post.css"
import {Avatar, IconButton} from "@mui/material"
import { Settings } from "@mui/icons-material"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

const Post = ({ avatar , name="" , timestamp , likes=0, image , desc="" , comments=0 }) => {


  

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

  const likeIt = useLiked({ initialState:0 , initialClickState:false })
  const loveIt = useLiked({ initialState:0 , initialClickState:false })
  

  return (
    <div className="post" >
      <div className="post__config">
        <div className="post__user" >
          { avatar ? (
            <Avatar src={avatar} />
          ) : (
            <Avatar> {name[0]} </Avatar>
          ) }
          <h3>{name}</h3>
          <p>{timestamp}</p>

        </div>
        <IconButton>
          <Settings />
        </IconButton>
      </div>

            
      <div className="post__content">

        { desc && <p> { desc } </p> }

        { image && <div onDoubleClick={loveIt.valueHandler} >
          <img 
          src={image} 
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

        <h5>
          {comments === 0 ? "" : `${comments} comments`}
        </h5>
      </div>

    </div>
  )
}

export default Post
