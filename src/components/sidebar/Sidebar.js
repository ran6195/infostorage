import React from 'react'
import Brand from './Brand'
import Divider from './Divider'
import Item from './Item'


class Sidebar extends React.Component {

    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Brand brand="infostorage" />
                <Divider />
                <Item link="#" icona="fas fa-fw fa-tachometer-alt" voce="Dashboard"/>
                <Divider />
            </ul>   
        )
    }

}


export default Sidebar