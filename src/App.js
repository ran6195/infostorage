import React from 'react';
//import logo from './logo.svg';
import './fontawesome.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'

import Sidebar from './components/sidebar/Sidebar'
import ContentWrapper from './components/content/ContentWrapper';
import Login from './components/Login';


const MyContext = React.createContext({
    user : '' ,
    token : ''
})




class App extends React.Component {

  constructor( props ) {
    super( props )
    this.handleLogin = this.handleLogin.bind( this )
  }

  handleLogin( e ) {
    e.preventDefault();
    this.setState({ logged_in : true })
  }

  componentDidMount() {
    Axios.defaults.headers.post['Content-Type'] = 'text/json';
   
    Axios.post( 'https:///api.opsboard.cloud/login' , {
      user: 'toniog@gmail.com' ,
      pass : 'pippo'
    })
    .then( res => console.log( res.data ) )
    .catch( err => console.log( err ) )
  }

/*   componentDidMount() {

    let myHeaders = new Headers({
      "Content-Type" : "text/html; charset=UTF-8"
      }     
    );

    let myInit = { method: 'POST',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
    fetch( 'https://api.opsboard.cloud/login' , myInit , {
      user: 'toniog@gmail.com' ,
      pass: 'pippo'
    })

   } */

  render() {

    let token = MyContext.Provider.token;


    console.log( token )
    if( false ) {
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
