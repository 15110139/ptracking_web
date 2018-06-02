import React, { Component } from 'react';
import User from "./User";
import { loadDB } from '../../lib/db.js';
import { connect } from 'react-redux';

class ListUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listuser: [],
            fetching: false,
            phoneNumber:''
        }
        const db = loadDB().firestore()
        db.collection('users')
            .onSnapshot(snapshot => {
                var listUser1 = []
                snapshot.forEach(function (doc) {
                    listUser1.push({ data: doc.data() })
                });
                this.setState({
                    listuser: listUser1,
                    fetching: true
                })
            }
        );
    }
    render() {
        const el = this.state.listuser.map((data, index) => (
            <div key={index} >
                <User data={data} {...this.props}/>
            </div>)
        )
        return (
            <div>
                {el}
            </div>
        );
    }

}

export default connect(null)(ListUser);
