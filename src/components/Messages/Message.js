import React, { Component } from 'react';
import { connect } from 'react-redux'
import { loadDB } from '../../lib/db';
import { getAllMessages } from "../../actions/Message";
import ListMessage from './ListMessage'
import moment from 'moment'
class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            touser: this.props.touser ? this.props.touser : '',
            messagesadmin: this.props.messagesadmin ? this.props.messagesadmin : [],
            messagesuser: this.props.messagesuser ? this.props.messagesuser : []
        }
        this.db = loadDB().firestore()
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
    componentWillMount() {
        console.log("componentWillMount")
        console.log(this.props.touser)
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps")
        console.log('this.props', this.props)
        console.log('nextProps', nextProps)
        if (this.props !== nextProps) {
            console.log('ok')
            if (this.props.touser !== nextProps.touser) {
                console.log('sdt')
                this.setState({
                    touser: nextProps.touser
                })
            }
            if (this.props.messagesadmin !== nextProps.messagesadmin) {
                console.log('messagesadmin')
                this.setState({
                    messagesadmin: nextProps.messagesadmin
                })
            }
            if (this.props.messagesuser !== nextProps.messagesuser) {
                console.log('messagesuser')
                this.setState({
                    messagesuser: nextProps.messagesuser
                })
            }
        }
    }
    onChangeInput = (e) => {
        const { data } = this.state
        this.setState({
            text: e.target.value
        })
    }   
    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.text!==''){
            this.db.collection("messages").doc().set({
                _id: new Date().getTime(),
                text: this.state.text,
                createdAt: new Date().getTime(),
                from: {
                    name: "admin",
                    avatar: 'https://www.shareicon.net/tag/firebase'
                },
                to: this.props.touser
            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });

            this.setState({
                text: ''
            })
        }
    }
    render() {
        console.log('remder')
        console.log("sdfdf",this.state)
        console.log("props", this.props)
        const { text, messagesadmin, messagesuser } = this.state
        var elmess = []
        if (messagesadmin && messagesuser) {
            console.log('con vao trong if')
            var messages = messagesadmin.concat(messagesuser)
            var showmess = [];
            showmess = messages.sort((a, b) => {
                return a.createdAt > b.createdAt
            })
            console.log('showmess', showmess)
            elmess = showmess.map((data, index) => {
                return (
                    <div index={index} className="stylemess">
                        <div className={data.from.name === 'admin' ? 'vt-admin' : 'vt-client'}>
                            <span className={data.from.name === 'admin' ? 'stylemessadmin' : 'stylemessclient'}>
                                        {data.text} 
                                </span>
                           </div>
                   </div>
                )
            })
        }
        return (
            <div className="col-lg-9">
                <div>
                    <div className="card overflow-auto">
                        <div className="card-body height-mess">
                            {elmess}
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="text" id="text" value={text} onChange={this.onChangeInput} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.handleSubmit} >Send</button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStatetoProps = state => {
    return {
        messagesadmin: state.Messages.messagesadmin,
        messagesuser: state.Messages.messagesuser,
        touser: state.Phone.phone
    }
}

export default connect(mapStatetoProps)(Message);
