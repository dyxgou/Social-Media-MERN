import { Avatar } from "@mui/material"
import "../CSS/SidebarFriend.css"

const SidebarFriend = ({ isConnected , avatar , name="" }) => {
  return (
    <div className="friend" >
      <div className="friend__avatar">
        { avatar ? (
          <Avatar src={avatar} />
        ) : (
          <Avatar> {name[0]} </Avatar>
        ) }

        { isConnected ? (
          <div className="friend__connected"></div>
          ) : (
          <div className="friend__notConnected"></div>
        ) }
      </div>

      <h3>{name}</h3>

    </div>
  )
}

export default SidebarFriend
