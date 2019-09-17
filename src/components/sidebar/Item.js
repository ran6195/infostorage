import React from 'react'
import { Link } from 'react-router-dom'

class Item extends React.Component {
    

    render() {
        return (
            <li className="nav-item">
                <Link to={ this.props.link } className="nav-link">
                    <i className={ this.props.icona }></i>
                    <span> { this.props.voce }</span>
                </Link>
            </li>
        )
    }

}

export default Item