import React from 'react';
//import { BrowserRouter as Router , Redirect } from 'react-router-dom'
import App from '../App'
import Axios from 'axios'

class Login extends React.Component {

    constructor( props ) {
        super( props )
        //console.log( this.props )
        this.state = { logged_in : this.props.logged_in }
        this.handleLogin = this.handleLogin.bind( this )
    }

    handleLogin( e ) {
        e.preventDefault();
        Axios.post( 'https://api.opsboard.cloud/login' , {
            user: document.getElementById( 'user' ).value,
            pass: document.getElementById( 'pass' ).value
        }).then( res => {
            if( res.data.token !== undefined ) {
                this.setState({ logged_in : true })
            } else {
                console.log( res.data.errore )
            }
        })
        //this.setState({ logged_in : true })
    }

    render() {

        if( this.state.logged_in ) {
            return (
                <App logged_in={ this.state.logged_in } sidebar={ this.props.sidebar }/>
            )
        } else {

        return (
                <div className="container">
                    <div className="card o-hidden border-0 shadow-lg" style={{ marginTop: 200 }}>
                        <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                            <div className="p-5">
                                <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Effettua il login</h1>
                                <form className="user">
                                    <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="user" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                                    </div>
                                    <div className="form-group">
                                    <input type="password" className="form-control form-control-user" id="pass" placeholder="Password" />
                                    </div>
                                    {/* <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                    </div>
                                    </div> */}
                                    <button onClick={ this.handleLogin } className="btn btn-primary btn-user btn-block">
                                    Login
                                    </button>
                                {/*  <hr />
                                    <a href="index.html" className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                    </a>
                                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                    </a> */}
                                </form>
                            <hr></hr>
                        {/*       <div class="text-center">
                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="register.html">Create an Account!</a>
                            </div> */}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div> 
            )
        }
    }


}

export default Login