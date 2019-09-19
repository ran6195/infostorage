import React from 'react';
//import logo from './logo.svg';
import './fontawesome.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'

import Sidebar from './components/sidebar/Sidebar'
import ContentWrapper from './components/content/ContentWrapper';
import Login from './components/Login';


const MyContext = React.createContext({
  logged_in : undefined 
})




class App extends React.Component {

  constructor( props ) {
    super( props )
    this.state = { logged_in : false }
    this.handleLogin = this.handleLogin.bind( this )
  }

  handleLogin( e ) {
    e.preventDefault();
    this.setState({ logged_in : true })
  }

  render() {
    if( this.state.logged_in ) {
      return (
        <MyContext.Provider value={ this.state }>
        <div id="wrapper">
            <Router>
              <Sidebar brand={ this.props.sidebar.brand } voci={ this.props.sidebar.voci }/>
              <ContentWrapper />
            </Router>
          </div>
        </MyContext.Provider>
      )
    } else {
      document.getElementsByTagName( 'body' )[ 0 ].classList.add( 'bg-gradient-primary' )
      return (
          <Login />
      )
    }
    
  }
}




export default App;
