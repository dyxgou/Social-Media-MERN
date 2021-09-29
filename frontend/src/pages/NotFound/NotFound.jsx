import { ErrorOutline } from "@mui/icons-material"
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="notFound" >
      <h1> 404 Page not found</h1>
      <ErrorOutline />
    </div>
  )
}

export default NotFound
