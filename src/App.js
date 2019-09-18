import React from 'react';
//import logo from './logo.svg';
import './fontawesome.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'

import Sidebar from './components/sidebar/Sidebar'
import ContentWrapper from './components/content/ContentWrapper';

class App extends React.Component {

  constructor( props ) {
    super( props )
    this.state = { logged_in : this.props.logged_in }

    this.handleLogin = this.handleLogin.bind( this )
  }

  handleLogin( e ) {
    e.preventDefault();
    this.setState({ logged_in : true })
  }

  render() {
    if( this.state.logged_in ) {
      return (
        <div id="wrapper">
          <Router>
            <Sidebar brand={ this.props.sidebar.brand } voci={ this.props.sidebar.voci }/>
            <ContentWrapper />
          </Router>
        </div>
      )
    } else {
      document.getElementsByTagName( 'body' )[ 0 ].classList.add( 'bg-gradient-primary' )
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
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
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




export default App;
