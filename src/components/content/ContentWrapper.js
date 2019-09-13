import React from 'react'
import Content from './Content'
import Topbar from './Topbar'

class ContentWrapper extends React.Component {
    render() {
        return (
            <div id="content-wrapper" className="d-flex flex-column" >
                <Content>
                    <Topbar>
                        
                    </Topbar>
                </Content>
            </div>
        )
    }
}

export default ContentWrapper 
