import React from 'react';
//import logo from './logo.svg';
import './fontawesome.css'
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css'

import Sidebar from './components/sidebar/Sidebar'
import ContentWrapper from './components/content/ContentWrapper';

class App extends React.Component {

  render() {

    return (
      <div className="wrapper" id="wrapper">
        <Sidebar brand={ this.props.sidebar.brand } voci={ this.props.sidebar.voci }/>
        <ContentWrapper />
       </div>
    )
  }
}




export default App;
