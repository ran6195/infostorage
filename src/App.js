import React from 'react';

//import logo from './logo.svg';
import './fontawesome.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'


import Sidebar from './components/sidebar/Sidebar'
import ContentWrapper from './components/content/ContentWrapper';
import Login from './components/Login';
import LogoutModal from './components/content/LogoutModal';


const MyContext = React.createContext({
    user : '' ,
    token : ''
})




class App extends React.Component {

  constructor( ) {

    super()

    this.state = {
      logged_in : false
    }


    this.handleLogout = this.handleLogout.bind( this )
  }

  handleLogout( e ) {
    this.setState({ logged_in : false })
  }

  render() {

    if( this.props.logged_in ) {
      return (
        <MyContext.Provider value={ this.state }>
        <div id="wrapper">
            <Router>
              <Sidebar brand={ this.props.sidebar.brand } voci={ this.props.sidebar.voci }/>
              <ContentWrapper handleLogout={ this.handleLogout }/>
            </Router>
            <LogoutModal />
        </div>
          
        </MyContext.Provider>
        
      )
    } else {
      
      return (
          <Login logged_in={ this.props.logged_in } sidebar={ this.props.sidebar } />
      )
    }
    
  }
}


export default App;
