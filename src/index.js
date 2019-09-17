import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const sidebar = {
  brand: {
    titolo: "infostorage",
    icona: "fas fa-database",
    link: "/infostorage"
  },
  voci: [
    {
      tipo: "singola",
      titolo: "Dashboard",
      icona: "fas fa-fw fa-tachometer-alt",
      link: "/"
    },
    {
      tipo: "divider",
      margin: false
    },
    {
      tipo: "heading",
      titolo: "Heading"
    },
    {
      tipo: "singola",
      titolo: "Pagina 2",
      icona: "fas fa-fw fa-tachometer-alt",
      link: "/pagina2"
    },
    {
      tipo: "singola",
      titolo: "Blank",
      icona: "fas fa-fw fa-tachometer-alt",
      link: "/blank"
    },
    {
      tipo: "menu",
      titolo: "Articoli",
      titoloSubMenu: "Custom components",
      icona: "fas fa-fw fa-database",
      chiuso: true,
      voci: [
        {
          tipo: "header",
          titolo: "Anagrafica"
        },
        {
          tipo: "singola",
          titolo: "Categorie",
          link: "/categorie"
        },
        {
          tipo: "singola",
          titolo: "Listini",
          link: "/listini"
        },
        {
          tipo: "header",
          titolo: "Gestione"
        },
        {
          tipo: "singola",
          titolo: "Elenco",
          link: "/elenco"
        },
        {
          tipo: "singola",
          titolo: "Dropshipping",
          link: "/dropshipping"
        },
        {
          tipo: "singola",
          titolo: "Comparatore",
          link: "/comparatore"
        }
      ]
    },
    {
      tipo: "menu",
      titolo: "Ordini",
      titoloSubMenu: "Sotto menu di prva",
      icona: "fas fa-fw fa-edit",
      chiuso: true,
      voci: [
        {
          tipo: "header",
          titolo: "login screens",
          link: "/"
        },
        {
          tipo: "singola",
          titolo: "Buttons"
        },
        {
          tipo: "singola",
          titolo: "Cards",
          link: "/"
        },
        {
          tipo: "header",
          titolo: "Other pages",
          link: "/"
        },
        {
          tipo: "singola",
          titolo: "Buttons 2",
          link: "/"
        },
        {
          tipo: "singola",
          titolo: "Cards 2",
          link: "/"
        }
      ]
    }
  ]
};

ReactDOM.render(<App sidebar={sidebar} />, document.getElementById("page-top"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
