import React from 'react'
import SubItem from './SubItem'

class ItemCollapsible extends React.Component {
    constructor( props ) {
        super( props )

        this.handleClick = this.handleClick.bind( this )
    }


    handleClick( e ) {
        e.preventDefault()
        //console.log( e.target )
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
        console.log( this.props )
        return (
            <li className="nav-item">
                <a onClick={ this.handleClick } className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target={ this.props.idCollapse } aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>{ this.props.titolo }</span>
                </a>
                <div id={ this.props.idCollapse } className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">{ this.props.titoloCollapse }:</h6>
                        <SubItem href="#" titolo="Uno"/>
                        <SubItem href="#" titolo="Due"/>
                        <SubItem href="#" titolo="Tre"/>
                    </div>
                </div>
            </li>
        )
    }

}

export default ItemCollapsible
