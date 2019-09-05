import React from 'react'



function Divider( props ) {

    let mg = ''

    if( props.margin )
        mg = 'my-0'


    return (
        <hr className={ "sidebar-divider " + mg } />
    )
}

export default Divider