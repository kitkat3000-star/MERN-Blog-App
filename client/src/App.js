import TopBar from "./components/topbar/TopBar";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/register";
import Copyright from "./components/copyright/Copyright";
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Sidebar_post from "./components/sidebar_post/Sidebar_post";



function App() {

  const {user} = useContext(Context);

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {user? <Home /> : <Register />}
        </Route>
        <Route path="/login">
        {user? <Home /> : <Login />}
        </Route>
        <Route path="/write">
        {user? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
        {user? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/about">
          <Sidebar_post />
        </Route>
        <Route path="/contact">
          <Sidebar_post />
        </Route>
      </Switch>
      <Copyright/>
    </Router>
  );
}

export default App;
