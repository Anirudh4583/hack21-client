import logo from './logo.svg'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Components/Login/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>

        </Switch>


      </Router>
    </div>
  )
}

export default App
