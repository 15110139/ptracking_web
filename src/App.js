import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Mapp from './Pages/Mapp'
import Login from './Pages/Login'
import ListMessage from './Pages/ListMessage'
import Full from "./Full/Full";
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  constructor(props){
    super(props)
  }
  phone(value){
    console.log(value)
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} {...this.props}/>
          <Route path="/full" component={Full} {...this.props}/>
        </div>
      </Router>
    );
  }
}
export default App;
