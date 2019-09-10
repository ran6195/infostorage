import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const sidebar = {
    brand : {
      titolo : 'infostorage' ,
      icona : 'fas fa-database'
    } ,
    voci : [
      { tipo: 'singola' , titolo: 'Prima voce' , icona: "fas fa-fw fa-tachometer-alt" } ,
      { tipo: 'divider' , margin: false } ,
      { tipo: 'heading' , titolo: 'Heading' } ,
      
      { tipo: 'singola' , titolo: 'seconda voce' , icona: "fas fa-fw fa-tachometer-alt" } ,
      { tipo: 'singola' , titolo: 'terza voce' , icona: "fas fa-fw fa-tachometer-alt" } ,
      { tipo: 'singola' , titolo: 'Prima voce' , icona: "fas fa-fw fa-tachometer-alt" } ,
      { tipo: 'menu' , titolo: 'components' , voci: [
        { tipo: 'heading' , titolo: 'custom components' } ,
        { tipo: 'singola' , titolo: 'Buttons'} ,
        { tipo: 'singola' , titolo: 'Cards'}
      ] } 
    ]
  }



ReactDOM.render(<App sidebar={ sidebar } />, document.getElementById('wrapper'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
