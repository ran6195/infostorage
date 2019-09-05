import React from 'react'
import Brand from './Brand'


class Sidebar extends React.Component {

    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Brand brand="infostorage" />
            </ul>   
        )
    }

}


export default Sidebar