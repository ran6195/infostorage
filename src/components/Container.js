import React from "react";
import { Route } from "react-router-dom";

function Slash() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Home</h1>
    </div>
  );
}

function Blank() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Blank</h1>
    </div>
  );
}

function Pagina() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Pagina 2</h1>
    </div>
  );
}

function Infostorage() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Infostorage</h1>
    </div>
  );
}

function Categorie() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Categorie</h1>
    </div>
  );
}

function Listini() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Listini</h1>
    </div>
  );
}

function Elenco() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Elenco</h1>
    </div>
  );
}

function Dropshipping() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Dropshipping</h1>
    </div>
  );
}

function Comparatore() {
  return (
    <div className="container-fluid">
      <h1 className="h3 mb-4 text-gray-800">Comparatore</h1>
    </div>
  );
}

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Slash}></Route>
        <Route path="/infostorage" component={Infostorage}></Route>
        <Route path="/blank" component={Blank}></Route>
        <Route path="/pagina2" component={Pagina}></Route>
        <Route path="/categorie" component={Categorie}></Route>
        <Route path="/listini" component={Listini}></Route>
        <Route path="/elenco" component={Elenco}></Route>
        <Route path="/dropshipping" component={Dropshipping}></Route>
        <Route path="/comparatore" component={Comparatore}></Route>
      </div>
    );
  }
}
