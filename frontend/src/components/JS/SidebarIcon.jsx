import "../CSS/SidebarIcon.css"

const SidebarIcon = ({ Icon , text  }) => {

  return (
    <div className="sidebarIcon" 
    >
      { Icon && <Icon className="sidebarIcon__icon"   /> }

      { text && <h2>{ text }</h2> }
    </div>  
  )
}

export default SidebarIcon
