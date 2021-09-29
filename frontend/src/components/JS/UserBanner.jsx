import { Avatar } from "@mui/material";
import "../CSS/UserBanner.css";

const UserBanner = ({ banner, avatar, name = "", description }) => {
  return (
    <div className="banner">
      <div className="banner__cover">
        <img src={banner} alt="Bannner User" className="banner__image" />

        
      </div>

      <div className="banner__info">
        {avatar ? (
          <Avatar src={avatar} className="banner__avatar" />
        ) : (
          <Avatar className="banner__avatar"> {name[0]} </Avatar>
        )}
        
        <h1>{name}</h1>

        <p> {description} </p>
      </div>
    </div>
  );
};

export default UserBanner;
