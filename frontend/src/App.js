
import { BrowserRouter as Router, Switch, Route, BrowserRouter,} from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/Login/LoginPage"
import NotFound from "./pages/NotFound/NotFound"
import ProfilePage from "./pages/Profile/ProfilePage"
import RegisterPage from "./pages/Register/RegisterPage"


const App = () => {
  return (
    <div className="app" >
      <BrowserRouter basename="/" >
        <Router>
          <Switch>
            <Route  path="/home" >
              <HomePage />
            </Route>
            <Route  path="/profile" >
              <ProfilePage />
            </Route>

            <Route exact path="/" >
              <LoginPage />
            </Route>

            <Route path="/register">
              <RegisterPage />
            </Route>

            <Route component={NotFound} />
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
