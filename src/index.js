import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const sidebar = {
  brand: {
    titolo: "infostorage",
    icona: "fas fa-database"
  },
  voci: [
    {
      tipo: "singola",
      titolo: "Prima voce",
      icona: "fas fa-fw fa-tachometer-alt"
    },
    { tipo: "divider", margin: false },
    { tipo: "heading", titolo: "Heading" },

    {
      tipo: "singola",
      titolo: "seconda voce",
      icona: "fas fa-fw fa-tachometer-alt"
    },
    {
      tipo: "singola",
      titolo: "terza voce",
      icona: "fas fa-fw fa-tachometer-alt"
    },
    {
      tipo: "singola",
      titolo: "Prima voce",
      icona: "fas fa-fw fa-tachometer-alt"
    },
    {
      tipo: "menu",
      titolo: "Components",
      titoloSubMenu: "Custom components",
      icona: "fas fa-fw fa-cog",
      chiuso: true,
      voci: [
        { tipo: "header", titolo: "login screens" },
        { tipo: "singola", titolo: "Buttons" },
        { tipo: "singola", titolo: "Cards" },
        { tipo: "header", titolo: "Other pages" },
        { tipo: "singola", titolo: "Buttons 2" },
        { tipo: "singola", titolo: "Cards 2" }
      ]
    },
    {
      tipo: "menu",
      titolo: "Menu di prova",
      titoloSubMenu: "Sotto menu di prva",
      icona: "fas fa-fw fa-database",
      chiuso: true,
      voci: [
        { tipo: "header", titolo: "login screens" },
        { tipo: "singola", titolo: "Buttons" },
        { tipo: "singola", titolo: "Cards" },
        { tipo: "header", titolo: "Other pages" },
        { tipo: "singola", titolo: "Buttons 2" },
        { tipo: "singola", titolo: "Cards 2" }
      ]
    }
  ]
};

ReactDOM.render(<App sidebar={sidebar} />, document.getElementById("wrapper"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
