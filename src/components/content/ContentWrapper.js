import React from 'react'
import Content from './Content'


class ContentWrapper extends React.Component {
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column" >
                <Content />
            </div>
        )
    }
}

export default ContentWrapper 
