import { Avatar } from "@mui/material"
import "../CSS/UserFriend.css"

const UserFriend = ({ avatar , name }) => {
  return (
    <div className="userFriend" >
      { avatar ? (
        <Avatar className="userFriend__avatar"  src={avatar} />
      ) : (
        <Avatar className="userFriend__avatar" > {name[0]} </Avatar >
      ) }

      <h4> {name} </h4>      
    </div>
  )
}

export default UserFriend
