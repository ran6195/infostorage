import React from 'react';
//import logo from './logo.svg';
import './fontawesome.css'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css'

import Sidebar from './components/sidebar/Sidebar'
import ContentWrapper from './components/content/ContentWrapper';

class App extends React.Component {

  render() {

    return (
      <div id="wrapper">
        <Router>
          <Sidebar brand={ this.props.sidebar.brand } voci={ this.props.sidebar.voci }/>
          <ContentWrapper />
        </Router>
      </div>
    )
  }
}




export default App;
