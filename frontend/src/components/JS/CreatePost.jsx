import "../CSS/CreatePost.css";
import { Avatar, Button, Input } from "@mui/material";
import PostIcon from "./PostIcon";
import { EmojiEmotions, LocationCity, PhotoCameraBack, Tag } from "@mui/icons-material";

const CreatePost = () => {
  return (
    <div className="createPost">
      <div className="createPost__info">
        <Avatar />
        <Input
          className="createPost__input"
          placeholder="What are you thinking?"
        />
      </div>
      <div className="createPost__postIcons">
        <PostIcon
          color="#ff5353"
          Icon={PhotoCameraBack}
          text="Photo or Video"
        />
        <PostIcon
          color="#3951db"
          Icon={Tag}
          text="Tag"
        />
        <PostIcon
          color="#d85189"
          Icon={LocationCity}
          text="Location"
        />
        <PostIcon
          color="#f88949"
          Icon={EmojiEmotions}
          text="Feelings"
        />
      </div>
      <hr />
      <Button>Share</Button>
    </div>
  );
};

export default CreatePost;
