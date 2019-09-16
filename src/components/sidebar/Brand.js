import React from 'react';
import { Link } from 'react-router-dom';

function Brand( props ) {
    return (
        <Link to={ props.link } className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon">
                <i className={ props.icona }></i>
            </div>
            <div className="sidebar-brand-text mx-3">{ props.titolo }</div>
        </Link>
    )
}


export default Brand