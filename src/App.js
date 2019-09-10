import React from 'react';
//import logo from './logo.svg';
import './fontawesome.css'
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css'

import Sidebar from './components/sidebar/Sidebar'

class App extends React.Component {

  render() {

    return (
      <Sidebar />
    )
  }
}


const sidebar = {
  brand : {
    titolo : 'infostorage' ,
    icona : 'fas fa-database'
  } ,
  voci : [
    { tipo: 'singola' , titolo: 'Prima voce'} ,
    { tipo: 'divider' } ,
    { tipo: 'heading' , titolo: 'interface' } ,
    { tipo: 'menu' , titolo: 'components' , voci: [
      { tipo: 'heading' , titolo: 'custom components' } ,
      { tipo: 'singola' , titolo: 'Buttons'} ,
      { tipo: 'singola' , titolo: 'Cards'}
    ] } 
  ]
}

export default App;
