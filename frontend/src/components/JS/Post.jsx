import "../CSS/Post.css"
import {Avatar, IconButton} from "@mui/material"
import { Settings } from "@mui/icons-material"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = ({ avatar , name="" , timestamp , image , likes=0 , desc="" , comments=0 }) => {
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

        <p> {desc} </p>

        { image && <img src={image} alt="It is the imagePost" className="post__image" /> }
      </div>

      <div className="post__bottom">
        <div className="post__bottomLeft">
          <div className="post__likeIcon">
            <IconButton>
              <ThumbUpAltIcon style={
                {
                  color:"#7986ff"
                }
              } />
            </IconButton>
          </div>
          <div className="post__heartIcon">
            <IconButton>
              <FavoriteIcon 
                style={
                  {
                    color: "#f84294"
                  }
                }
              />
            </IconButton>
          </div>

          <h4>
            { likes === 0 ? "" : `${likes} peoples like it` } 
          </h4>
        </div>

        <h5>
          {comments === 0 ? "" : `${comments} comments`}
        </h5>
      </div>

    </div>
  )
}

export default Post
