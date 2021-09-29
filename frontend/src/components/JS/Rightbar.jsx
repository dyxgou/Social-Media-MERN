import "../CSS/Rightbar.css"
import { Avatar, LinearProgress } from "@mui/material"
import Stats from "./Stats"
import StarsIcon from '@mui/icons-material/Stars';
import { Call } from '@mui/icons-material'
import SidebarFriend from "./SidebarFriend";

const Rightbar = () => {
  return (
    <div className="rightbar" >
      <div className="rightbar__top">
        <Avatar src="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png" />
        <h2 className="rightbar__title" >Welcome <span>iDiego</span></h2>
      </div>

      <div className="rightbar__info">
        <Stats 
          Icon={StarsIcon}
          colorIcon="#ff62a9"
          text="Peolple that Follow you"
          value={5}
        />
        <Stats 
          Icon={Call}
          colorIcon="#6c62ff"
          text="You're following"
          value={5}
        />
      </div>
      <LinearProgress />


      <div className="rightbar__friends">
      <h3  >Friends Connected</h3>
      <SidebarFriend 
          avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
          name="iDiego"
          isConnected={false}
        />
        <SidebarFriend 
          avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
          name="iDiego"
          isConnected={false}
        />
        <SidebarFriend 
          avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
          name="iDiego"
          isConnected={false}
        />
      </div>

    </div>
  )
}

export default Rightbar