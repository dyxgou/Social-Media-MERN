import { useEffect, useState } from "react"
import "../CSS/Feed.css"
import CreatePost from "./CreatePost"
import axios from "../../data/axios"
import Post from "./Post"

const Feed = () => {

  const [ posts , setPosts ] = useState([])

  useEffect(() =>
  {
    const fetchPosts = async () =>
    {
      const res = await axios.get("posts/timeline/6150b054ba2dd8f088fb565a")
      return setPosts(res.data)
    }

    return fetchPosts()
  } , [posts])

  return (
    <div className="feed" >
      {/* It is the Section to create a new Post */}
      <CreatePost />

      {/* Here, we're going to share all the post with a map from the db */}

      {
        posts.map(post => 
          {
            return (
              <Post 
                key={post._id}
                // userId={"6150b054ba2dd8f088fb565a"}
                // desc={post.desc}
                // image={post.img}
                // timestamp={post.createdAt}
                post={post}
              />
            )
          }
        )
      }
      
      
    </div>
  )
}

export default Feed
