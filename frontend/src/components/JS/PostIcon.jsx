import "../CSS/PostIcon.css"

const PostIcon = ({ text , Icon , color }) => {
  return (
    <div className="postIcon" >
      <div style={{color : color }} >
        { Icon && <Icon className="postIcon__icon" /> }
      </div>
      <h4> { text } </h4>
    </div>
  )
}

export default PostIcon
