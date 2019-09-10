import React from 'react'

function Brand( props ) {
    return (
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon">
                <i className={ props.icona }></i>
            </div>
            <div className="sidebar-brand-text mx-3">{ props.titolo }</div>
        </a>
    )
}


export default Brand