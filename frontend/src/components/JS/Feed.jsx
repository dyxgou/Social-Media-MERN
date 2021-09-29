import "../CSS/Feed.css"
import CreatePost from "./CreatePost"
import Post from "./Post"

const Feed = () => {
  return (
    <div className="feed" >
      {/* It is the Section to create a new Post */}
      <CreatePost />

      {/* Here, we're going to share all the post with a map from the db */}

      <Post 
        avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
        name="iDiego"
        timestamp={new Date().toUTCString().split(" ")[4]}
        desc="Hey, it is my first post!"
        image="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
        likes={5}
        comments={5}
      />
      <Post 
        avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
        name="iDiego"
        timestamp={new Date().toUTCString().split(" ")[4]}
        desc="Hey, it is my first post!"
        image="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
        likes={5}
        comments={5}
      />
      <Post 
        avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
        name="iDiego"
        timestamp={new Date().toUTCString().split(" ")[4]}
        desc="Hey, it is my first post!"
        image="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
        likes={5}
        comments={5}
      />
      <Post 
        avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
        name="iDiego"
        timestamp={new Date().toUTCString().split(" ")[4]}
        desc="Hey, it is my first post!"
        image="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
        likes={5}
        comments={5}
      />
      
      
    </div>
  )
}

export default Feed
