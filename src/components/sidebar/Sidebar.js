import React from 'react'
import Brand from './Brand'
import Divider from './Divider'
import Item from './Item'
import Heading from './Heading'
import ItemCollapsible from './ItemCollapsible'
import _ from 'lodash'


class Sidebar extends React.Component {



    render() {

        let test1 = <Divider margin="true" key="0"/>
        let test2 = <Item link="#" icona="fas fa-fw fa-tachometer-alt" voce="Dashboard" key="1"/>
        let testArray = [ test1 , test2 ]

        let voci = []
        let k = 0

        _.each( this.props.voci , voce => {
            console.log( voce )
            switch( voce.tipo ) {
                case "singola":
                    voci.push(
                        <Item link="#" icona={ voce.icona } voce={ voce.titolo } key={ k++ }/>
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

                default:
            }
        })

        console.log( voci )

        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Brand titolo={ this.props.brand.titolo } icona={ this.props.brand.icona }/>
                {
                    _.each( voci , v => v )
                }
            </ul>   
        )
    }

}


export default Sidebar