import React from 'react'

function SubItem( props  ) {
    return (
        <a className="collapse-item" href={ props.href }>{ props.titolo }</a>
    )
}

export default SubItem