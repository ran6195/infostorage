import React from 'react'



export default class UserInformation extends React.Component {

    constructor( props ) {
        super( props )

        this.state = { menu : 'chiuso' }

        this.handleClickOutside = this.handleClickOutside.bind( this )
        this.handleMenu = this.handleMenu.bind( this )
        this.handleLogout = this.handleLogout.bind( this )
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        console.log( event.target )
        if( event.target.id !== 'userDropdown' && this.state.menu === 'aperto' && event.target.id !== 'logout-modal' )
            this.handleMenu()
      }

    handleMenu() {

        let lC = document.getElementById( 'menu-user-info' ).classList
        let dC = document.getElementById( 'div-user-info' ).classList

        if( lC.contains( 'show' ) ) {
            lC.remove( 'show' );
            dC.remove( 'show' );
            this.setState({ menu : 'chiuso'})
        } else {
            this.setState({ menu : 'aperto' })
            lC.add( 'show' );
            dC.add( 'show' );
        }
    
    }

    handleLogout() {
        window.sessionStorage.removeItem( 'token' )
    }

    render() {
        return (
            <li id="menu-user-info" className="nav-item dropdown no-arrow">
            <a  onClick={ this.handleMenu }  href={ "#" } className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
              <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
            </a>
            {/* <!-- Dropdown - User Information --> */}
            <div id="div-user-info" className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a id="logout-modal" className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        )
    }

}