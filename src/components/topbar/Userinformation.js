import React from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownMenu from 'react-bootstrap/DropdownMenu';



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


export default class UserInformation extends React.Component {

    render() {
        return (
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
        )
    }

}