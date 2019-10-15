import React from "react";
import { Route } from "react-router-dom";
import { Dropdown } from 'react-bootstrap'



class CustomToggle extends React.Component {
  constructor( props , context ) {

    super( props , context )

    this.handleClick = this.handleClick.bind( this )
  }


  handleClick( e ) {
    e.preventDefault()
    this.props.onClick( e )
  }

  render() {
    return (
      <a href="#" onClick={ this.handleClick }>
        { this.props.children }
      </a>
    )
  }

}

class CustomMenu extends React.Component {
  constructor( props , context ) {

    super( props , context )
    
    this.handleChange = this.handleChange.bind( this )
    
    this.state = { value : '' }
  }

  handleChange( e ) {
    this.setState({ value : e.target.value.toLowerCase().trim() })
  }

  render() {
    const {
      children , style ,  className , 'aria-labelledBy' : labelledBy
    } = this.props

    const { value } = this.state

    return (
      <div style={ style } className={ className } aria-labelledby={ labelledBy }>
        <ul className="list-unstyled">
          {React.Children.toArray( children )}
        </ul>
      </div>
    )


  }
}

function Slash() {
  return (
    <div className="container-fluid">
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            Custom toggle
          </Dropdown.Toggle>

          <Dropdown.Menu as={CustomMenu} style={{ color: 'black' }}>
            <Dropdown.Item eventKey="1" className="I">Red</Dropdown.Item>
            <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
            Orange
            </Dropdown.Item>
            <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
