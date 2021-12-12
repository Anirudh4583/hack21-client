import logo from './logo.svg'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Components/Login/Login";
import NavbarCustom from "./Components/Navbar/NavbarCustom";
import Dashboard from "./Components/Dashboard/Dashboard";
import MarketPlace from "./Components/MarketPlace/MarketPlace";
function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Login}/>
          <NavbarCustom/>
        <Switch>

            <Route exact path="/Dashboard" component={Dashboard}/>
            <Route exact path="/MarketPlace" component={MarketPlace}/>


        </Switch>


      </Router>
    </div>
  )
}

export default App
