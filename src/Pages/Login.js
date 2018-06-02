import React, { Component } from 'react';
import { loadDB } from './../lib/db.js';
import { ToastContainer } from 'react-toastify'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                email: '',
                password: ''
            }

        }
    }
    componentWillMount(){
        console.log('componentWillMount')
        const {
            history,
        } = this.props;
        loadDB().auth().onAuthStateChanged( (user) =>{
            if(user){
                var string1 = window.localStorage.getItem('islogin')
                if (string1.localeCompare(user.G)==0)
                    history.push('./full');
            }else{
            }
            
        })
    }
    onChangeInput = (e) => {
        const { data } = this.state
        this.setState({
            data: {
                ...data,
                [e.target.name]: e.target.value
            },
        })
    }
    handleSubmit = (e) => {
        const {
            history,
        } = this.props;
        e.preventDefault()
        const { data: { email, password } } = this.state
        loadDB().auth().signInWithEmailAndPassword(email, password)
            .then((u) => {
                window.localStorage.setItem('islogin',u.G)
                history.push('./map');
            })
            .catch(error => {
                alert("Email hoặc mật khẩu sai, vui lòng nhập lại");
                this.setState({
                    data:{
                        email:'',
                        password:''
                    }
                })
            });
    }
    render() {
        console.log('render')
        const { data: { email, password } } = this.state
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-center text-white mb-4">Bootstrap 4 Login Form</h2>
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card rounded-0">
                                    <div className="card-header">
                                        <h3 className="mb-0">Login</h3>
                                    </div>
                                    <div className="card-body">
                                        <form id="changePassWordForm" action="#" onSubmit={this.handleSubmit} noValidate="novalidate" className="form" >
                                            <div className="form-group">
                                                <label htmlFor="uname1">Username</label>
                                                <input type="text" className="form-control form-control-lg rounded-0" name="email" id="email" value={email} required onChange={this.onChangeInput} />
                                                <div className="invalid-feedback">Oops, you missed this one.</div>
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control form-control-lg rounded-0" id="password" required autoComplete="new-password" name="password" value={password} onChange={this.onChangeInput} />
                                                <div className="invalid-feedback">Enter your password too!</div>
                                            </div>
                                            <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Login;