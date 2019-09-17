import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const sidebar = {
  brand: {
    titolo: "infostorage",
    icona: "fas fa-database" ,
    link : "/infostorage"
  },
  voci: [
    {
      tipo: "singola",
      tipo: "menu",
      titolo: "Components",
      titoloSubMenu: "Custom components",
      icona: "fas fa-fw fa-cog",
      chiuso: true,
      voci: [
        {
          tipo: "header",
          titolo: "login screens"
        }, {
          tipo: "singola",
          titolo: "Buttons"
        }, {
          tipo: "singola",
          titolo: "Cards"
        }, {
          tipo: "header",
          titolo: "Other pages"
        }, {
          tipo: "singola",
          titolo: "Buttons 2"
        }, {
          tipo: "singola",
          titolo: "Cards 2"
        }
      ]
    }, {
      tipo: "menu",
      titolo: "Menu di prova",
      titoloSubMenu: "Sotto menu di prova",
      icona: "fas fa-fw fa-database",
      chiuso: true,
      voci: [
        {
          tipo: "header",
          titolo: "login screens"
        }, {
          tipo: "singola",
          titolo: "Buttons"
        }, {
          tipo: "singola",
          titolo: "Cards"
        }, {
          tipo: "header",
          titolo: "Other pages"
        }, {
          tipo: "singola",
          titolo: "Buttons 2"
        }, {
          tipo: "singola",
          titolo: "Cards 2"
        }
      ]
    }
  ]
};

ReactDOM.render(< App sidebar = {
  sidebar
} />, document.getElementById("page-top"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
