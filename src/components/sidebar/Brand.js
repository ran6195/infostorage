import React from 'react'

function Brand( props ) {
    return (
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
            <div className="sidebar-brand-icon">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">{ props.brand}</div>
        </a>
    )
}


export default Brand