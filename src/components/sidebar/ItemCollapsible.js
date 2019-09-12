import React from "react";
import SubItem from "./SubItem";
import _ from "lodash";
import SubMenuHeader from "./SubMenuHeader";

class ItemCollapsible extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collapsed : 'collapsed' , show: '' }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    e.preventDefault();

      ( this.state.collapsed === 'collapsed' ) ? this.setState({ collapsed : '' }) : this.setState({ collapsed : 'collapsed' }); 
      ( this.state.show === '' ) ? this.setState({ show : 'show' }) : this.setState({ show : '' });
  }

  render() {
    /**
     * costruzione delle voci del sotto menu
     */

    let subMenu = [];
    let k = 0;
    _.each(this.props.voci, voce => {
      switch (voce.tipo) {
        case "singola":
          subMenu.push(<SubItem href="#" titolo={voce.titolo} key={k++} />);
          break;

        case "header":
          subMenu.push(<SubMenuHeader titolo={voce.titolo} key={k++} />);
          break;

        default:
      }
    });

    return (
      <li className="nav-item">
        <a
          onClick={this.handleClick}
          className={ "nav-link " + this.state.collapsed }
          href="index.html"
          data-toggle="collapse"
          data-target={this.props.idCollapse}
          aria-expanded="true"
          aria-controls="collapseTwo">
          <i className={this.props.icona}></i>
          <span>{this.props.titolo}</span>
        </a>
        <div
          id={this.props.idCollapse}
          className= { "collapse " + this.state.show }
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar">
          <div className="bg-white py-2 collapse-inner rounded">{subMenu}</div>
        </div>
      </li>
    );
  }
}

export default ItemCollapsible;
