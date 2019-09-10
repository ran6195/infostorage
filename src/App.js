import React from 'react';
//import logo from './logo.svg';
import './fontawesome.css'
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css'

import Sidebar from './components/sidebar/Sidebar'

class App extends React.Component {


  render() {

    return (
      <Sidebar brand={ this.props.sidebar.brand } voci={ this.props.sidebar.voci }/>
    )
  }
}




export default App;
