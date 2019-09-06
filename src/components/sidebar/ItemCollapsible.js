import React from 'react'

class ItemCollapsible extends React.Component {
    constructor( props ) {
        super( props )

        this.handleClick = this.handleClick.bind( this )
    }


    handleClick( e ) {
        e.preventDefault()

        const tag = e.target.tagName
        let el  = e.target
        let id = ''

        switch( tag ) {
            case 'A':
                id = el.dataset.target
            break;

            case 'I':
            case 'SPAN':
                id = el.parentElement.dataset.target
                el = el.parentElement
            break;

            default:

        }

        document.getElementById( id ).classList.contains( 'show' ) ? document.getElementById( id ).classList.remove( 'show' ) : document.getElementById( id ).classList.add( 'show' )

        el.classList.contains( 'collapsed' ) ? el.classList.remove( 'collapsed' ) : el.classList.add( 'collapsed' )
    }

    render() {
        return (
            <li className="nav-item">
                <a onClick={ this.handleClick } className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target="collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="buttons.html">Buttons</a>
                        <a className="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>
        )
    }

}

export default ItemCollapsible