import "../CSS/Topbar.css"
import { Search , Person , Chat , NotificationAdd } from "@mui/icons-material"
import { Avatar, IconButton } from "@mui/material"
import ComputerIcon from '@mui/icons-material/Computer';


const Topbar = () => {
  return (
    <div className="topbar" >
      <div className="topbar__left">
        <div className="topbar__logo" >
          <ComputerIcon className="topbar__logoImg" />
          <span className="topbar__logoText">LamaSocial</span>
        </div>
      </div>
      <div className="topbar__center">
        <div className="topbar__search" >
          <div className="topbar__inputContainer">
            <Search />
            <input 
              type="text" 
              placeholder="Search some video, user or post "
            />
          </div>
        </div>
      </div>
      <div className="topbar__right">
        <div className="topbar__links">
          <span className="topbar__homepageLink" >HomePage</span>
          <span className="topbar__homepageLink" >Timeline</span>
        </div>
        <div className="topbar__icons">
          <div className="topbar__item">
            <IconButton>
              <Person className="topbar__itemIcon" />
            </IconButton>
            <span className="topbar__iconBadge" >1</span>
          </div>

          <div className="topbar__item">
            <IconButton>
              <Chat className="topbar__itemIcon" />
            </IconButton>
            <span className="topbar__iconBadge" >1</span>
          </div>

          <div className="topbar__item">
            <IconButton>
              <NotificationAdd className="topbar__itemIcon" />
            </IconButton>
            <span className="topbar__iconBadge" >1</span>
          </div>
        </div>

        <Avatar src="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png" />
      </div>
    </div>
  )
}

export default Topbar
