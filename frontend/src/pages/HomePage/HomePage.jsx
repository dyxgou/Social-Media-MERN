import Feed from "../../components/JS/Feed"
import Rightbar from "../../components/JS/Rightbar"
import Sidebar from "../../components/JS/Sidebar"
import Topbar from "../../components/JS/Topbar"

import "./HomePage.css"

const HomePage = () => {
  return (
    <div className="home" >
      {/* Topbar */}
      <Topbar />
      
      <div className="home__container">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Rightbar */}
        <Rightbar />
      </div>

    </div>  
  )
}

export default HomePage
