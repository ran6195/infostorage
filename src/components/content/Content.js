import React from 'react';
import Topbar from './Topbar'
import Container from '../Container';

export default class Content extends React.Component {
    render() {
        return (
            <div id="content" >
                <Topbar />
                <Container />
            </div>
        )
    }
}