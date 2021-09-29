import { LinearProgress } from "@mui/material";
import "../CSS/UserInfo.css";
import UserFriend from "./UserFriend";

const UserInfo = ({ city, from, ship, friends }) => {
  return (
    <div className="info">
      <h2>User Information</h2>

      <div className="info__text">
        <h3>
          {" "}
          City : <span> {city} </span>{" "}
        </h3>
        <h3>
          {" "}
          From : <span> {from} </span>{" "}
        </h3>
        <h3>
          {" "}
          RelationShip : <span> {ship} </span>{" "}
        </h3>
      </div>

      <LinearProgress />

      <div className="info__friends">
        <UserFriend
          avatar="https://cdn.discordapp.com/avatars/732356204206096394/5cc5e9d7c391865e690a1a15e5585105.png?size=1024"
          name="Paula"
        />
        <UserFriend
          avatar="https://cdn.discordapp.com/avatars/732356204206096394/5cc5e9d7c391865e690a1a15e5585105.png?size=1024"
          name="Paula"
        />
        <UserFriend
          avatar="https://cdn.discordapp.com/avatars/732356204206096394/5cc5e9d7c391865e690a1a15e5585105.png?size=1024"
          name="Paula"
        />
        <UserFriend
          avatar="https://cdn.discordapp.com/avatars/732356204206096394/5cc5e9d7c391865e690a1a15e5585105.png?size=1024"
          name="Paula"
        />
        <UserFriend
          avatar="https://cdn.discordapp.com/avatars/732356204206096394/5cc5e9d7c391865e690a1a15e5585105.png?size=1024"
          name="Paula"
        />

        <UserFriend
          avatar="https://cdn.discordapp.com/avatars/732356204206096394/5cc5e9d7c391865e690a1a15e5585105.png?size=1024"
          name="Paula"
        />
        <UserFriend
          avatar="https://cdn.discordapp.com/avatars/732356204206096394/5cc5e9d7c391865e690a1a15e5585105.png?size=1024"
          name="Paula"
        />
        <UserFriend
          avatar="https://cdn.discordapp.com/avatars/732356204206096394/5cc5e9d7c391865e690a1a15e5585105.png?size=1024"
          name="Paula"
        />
      </div>
    </div>
  );
};

export default UserInfo;
