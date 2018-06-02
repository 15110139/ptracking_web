import React, { Component } from 'react';
import ListUser from "./../components/ListUser/ListUser";
import MyMapComponent from "./../components/Map/MyMapComponent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Mapp from './../Pages/Mapp'
import { loadDB } from './../lib/db.js';
import ListMessage from './../Pages/ListMessage'
class Full extends Component {
    constructor(props) {
        super(props)
    }
    Logout=()=>{
        const {
            history,
        } = this.props;
        loadDB().auth().signOut().then(function () {
            history.push('./')
            window.localStorage.setItem('islogin','')
        }).catch(function (error) {

        });
    }
    render() {
        return (
            <Router>
                <div>
                    <nav className="nav">
                        <li className="nav-item">
                            <Link className="btn btn-info" to="/full">Map</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-info" to="/listmessages">List Messages</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-info"onClick={this.Logout} >Logout</button>
                        </li>
                    </nav>
                    <Route exact path="/full" component={Mapp} />
                    <Route path="/listmessages" component={ListMessage} />
                </div>
            </Router>
        );
    }
}
export default Full;
