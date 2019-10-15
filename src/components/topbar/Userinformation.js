import React from 'react'
import { Dropdown , FormControl } from 'react-bootstrap'



class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <li className="nav-item dropdown no-arrow">
        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
          <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
        </a>
      </li>
    );
  }
}

class CustomMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value.toLowerCase().trim() });
  }

  render() {
    const {
      children,
      style,
      className,
      'aria-labelledby': labeledBy,
    } = this.props;

    const { value } = this.state;

    return (
      <div style={style} className={className} aria-labelledby={labeledBy}>
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={this.handleChange}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  }
}


export default class UserInformation extends React.Component {

    render() {
        return (
          <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            Custom toggle
          </Dropdown.Toggle>
      
          <Dropdown.Menu as={CustomMenu}>
            <Dropdown.Item eventKey="1">Red</Dropdown.Item>
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