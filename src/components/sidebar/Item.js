import React from 'react'

class Item extends React.Component {

    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href={ this.props.link }>
                    <i className={ this.props.icona }></i>
                    <span> { this.props.voce }</span>
                </a>
            </li>
        )
    }

}

export default Item