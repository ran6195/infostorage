import React from 'react'
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
      <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="#" onClick={ this.handleClick }>
          { this.props.children }
        </a>
      </li>
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


export default class UserInformation extends React.Component {

    constructor( props , context ) {
      super( props , context )

      this.handleLogout = this.handleLogout.bind( this )
    }

    handleLogout( e ) {
      e.preventDefault()
      window.sessionStorage.removeItem( 'token' )
      document.location.href = '/'
    }

    render() {
        return (
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
              <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt="" />
            </Dropdown.Toggle>

          <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item eventKey="1">
            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>Profile
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>Settings
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>Activity Log
            </Dropdown.Item>
            <div className="dropdown-divider"></div>
            <Dropdown.Item eventKey="4" onClick={ this.handleLogout }>
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        )
    }

}