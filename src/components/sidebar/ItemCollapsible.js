import React from 'react'
import SubItem from './SubItem'
import _ from 'lodash'
import SubMenuHeader from './SubMenuHeader'

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
        //testing branches
        const prova = {}


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
        /**
         * costruzione delle voci del sotto menu
         */

        let subMenu = []
        let k = 0
        _.each( this.props.voci , voce => {
            switch( voce.tipo ) {
                case "singola":
                    subMenu.push (
                        <SubItem href="#" titolo={ voce.titolo } key={ k++ } />
                    )
                break;
                
                case "header":
                    subMenu.push (
                        <SubMenuHeader titolo={ voce.titolo } key={ k++ } />
                    )
                break;

                default:
            }

        })


        return (
            <li className="nav-item">
                <a onClick={ this.handleClick } className="nav-link collapsed" href="index.html" data-toggle="collapse" data-target={ this.props.idCollapse } aria-expanded="true" aria-controls="collapseTwo">
                    <i className={ this.props.icona }></i>
                    <span>{ this.props.titolo }</span>
                </a>
                <div id={ this.props.idCollapse } className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        { subMenu }
                    </div>
                </div>
            </li>
        )
    }

}

export default ItemCollapsible
