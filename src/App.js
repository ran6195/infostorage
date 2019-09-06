import React from 'react';
//import logo from './logo.svg';
import './fontawesome.css'
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css'

import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
      <Sidebar />
  )
}


const sidebar = {
  brand : {
    titolo : 'infostorage' ,
    icona : ''
  } ,
  voci : [
    { tipo: singola , titolo: 'Prima voce'}
  ]
}

export default App;
