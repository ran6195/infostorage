import React from 'react'
import Brand from './Brand'
import Divider from './Divider'
import Item from './Item'
import Heading from './Heading'
import ItemCollapsible from './ItemCollapsible'
import _ from 'lodash'



class Sidebar extends React.Component {

    constructor( props ) {
        super( props )

        this.handleSidebarToggle = this.handleSidebarToggle.bind( this )
    }

    handleSidebarToggle() {
        let b = document.getElementById( 'page-top' );
        let s = document.getElementById( 'accordionSidebar' );
        b.classList.contains( 'sidebar-toggled' ) ? b.classList.remove( 'sidebar-toggled' ) : b.classList.add( 'sidebar-toggled' );
        s.classList.contains( 'toggled' ) ? s.classList.remove( 'toggled' ) : s.classList.add( 'toggled' );
    }


    render() {

        /* let test1 = <Divider margin="true" key="0"/>
        let test2 = <Item link="#" icona="fas fa-fw fa-tachometer-alt" voce="Dashboard" key="1"/>
        //let testArray = [ test1 , test2 ] */

        let voci = []
        let k = 0

        _.each( this.props.voci , voce => {
            //console.log( voce )
            switch( voce.tipo ) {
                case "singola":
                    voci.push(
                        <Item link={ voce.link } icona={ voce.icona } voce={ voce.titolo } key={ k++ }/>
                        //<Link to={ voce.titolo }></Link>
                    )
                break;

                case "divider":
                    voci.push(
                        <Divider margin={ voce.margin } key={ k++ }/>
                    )
                break;


                case "heading":
                    voci.push(
                        <Heading titolo={ voce.titolo } key={ k++ }/>
                    )
                break;

                case "menu":
                        voci.push(
                            <ItemCollapsible 
                                idCollapse={ "id" + k } 
                                titolo={ voce.titolo } 
                                titoloCollapse={ voce.titoloSubMenu } 
                                icona={ voce.icona }
                                voci={ voce.voci }
                                key={ k++ }     
                            />
                        )
                break;

                default:
            }
        })

        //console.log( voci )

        return (
         
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <Brand link={ this.props.brand.link } titolo={ this.props.brand.titolo } icona={ this.props.brand.icona }/>
                    {
                        _.each( voci , v => v )
                    }

                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" onClick={ this.handleSidebarToggle } ></button>
                    </div>
                </ul>   
            
        )
    }

}


export default Sidebar