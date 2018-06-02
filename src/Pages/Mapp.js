import React, { Component } from 'react';
import ListUser from "./../components/ListUser/ListUser";
import MyMapComponent from "./../components/Map/MyMapComponent";
import { loadDB } from '../lib/db.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ListMessage from './ListMessage'
class Mapp extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('componentWillMount')
    const {
      history,
    } = this.props;
    loadDB().auth().onAuthStateChanged((user) => {
      if (user) {
        var string1 = window.localStorage.getItem('islogin')
        if (string1.localeCompare(user.G) == 0)
          history.push('./full');
      } else {
      }
    })
  }
  render() {
    return (
      <div>
        <div className='row'>
          <div className="col-lg-2 sidenav">
            <ListUser />
          </div>
          <div className="col-lg-10 ml-auto" >
            <MyMapComponent />
          </div>
        </div>
      </div>
    );
  }
}
export default Mapp;
