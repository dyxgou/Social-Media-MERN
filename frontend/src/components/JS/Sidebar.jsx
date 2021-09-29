import "../CSS/Sidebar.css"

import { RssFeed , Chat, YouTube, Group, Bookmark, QuestionAnswer, Folder, Event as EventIcon, CastForEducation,  } from "@mui/icons-material"
import SidebarIcon from "./SidebarIcon"
import { Button, LinearProgress } from "@mui/material"
import SidebarFriend from "./SidebarFriend"

const Sidebar = () => {
  return (
    <div className="sidebar" >
      <div className="sidebar__wrapper">
        {/* It's the div that contains all the Elements of the UI */}
        <SidebarIcon 
          text="Feed"
          Icon={RssFeed}
        />
        <SidebarIcon 
          text="Chat"
          Icon={Chat}
        />
        <SidebarIcon 
          text="Videos"
          Icon={YouTube}

        />
        <SidebarIcon 
          text="Group"
          Icon={Group}

        />
        <SidebarIcon 
          text="Bookmarks"
          Icon={Bookmark}

        />
        <SidebarIcon 
          text="Questions"
          Icon={QuestionAnswer}

        />
        <SidebarIcon 
          text="Jobs"
          Icon={Folder}

        />
        <SidebarIcon 
          text="Events"
          Icon={EventIcon}

        />
        <SidebarIcon 
          text="Courses"
          Icon={CastForEducation}

        />

        <Button>Show More</Button>
      </div>

      <LinearProgress />

      <div className="sidebar__friends">
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

export default Sidebar
