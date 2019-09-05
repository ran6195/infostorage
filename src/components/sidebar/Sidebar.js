import React from 'react'
import Brand from './Brand'
import Divider from './Divider'
import Item from './Item'
import Heading from './Heading'


class Sidebar extends React.Component {

    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Brand brand="infostorage" />
                <Divider margin="true" />
                <Item link="#" icona="fas fa-fw fa-tachometer-alt" voce="Dashboard"/>
                <Divider />
                <Heading titolo="Interface" />
                <Item link="#" icona="fas fa-fw fa-tachometer-alt" voce="test" />
            </ul>   
        )
    }

}


export default Sidebar