import React, { Component } from 'react';
import ListUser from "./../components/ListUser/ListUser";
import MyMapComponent from "./../components/Map/MyMapComponent";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Mapp from './Mapp'
import Message from "./../components/Messages/Message";
class ListMessage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className='row'>
                    <div className="col-lg-2 sidenav">
                        <ListUser {...this.props}  />
                    </div>
                    <div className="col-lg-10 ml-auto" >
                       <Message/>
                    </div>
                </div>
            </div>
        );
    }
}
export default ListMessage;
