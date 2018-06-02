
import React, { Component } from 'react';
import { loadDB } from '../../lib/db';
import { getlocation } from '../../actions/Location'
import { connect } from 'react-redux';
import { getAllMessages } from "../../actions/Message";
import  {setPhone} from "../../actions/Phone"
class User extends Component {
    constructor(props) {
        super(props)
    }
    ClickUser = (phoneNumber) => {
        console.log(phoneNumber)
        this.props.dispatch(setPhone(phoneNumber))
        this.props.dispatch(getlocation(phoneNumber))
        this.props.dispatch(getAllMessages(phoneNumber))
        
    }
    render() {
        const { online, phoneNumber } = this.props.data.data
        return (
            <div className="container pointer" onClick={() => this.ClickUser(phoneNumber)} >
                <div className="row">
                    <div className="col-lg-3 ">
                        <div className="circle">
                            <img className="img-full" src={require('./react-icons.svg')} alt="no image" />
                        </div>
                    </div>
                    <div className="col-lg-9 setmidlle" >
                        <div className="row">
                            <div className="col-lg-10">
                                <div>{phoneNumber}</div>
                            </div>
                            <div className="col-lg-2 setmidlle">
                                <div className={online ? 'online' : 'offline'} ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null)(User);