import React from 'react';
//import { BrowserRouter as Router , Redirect } from 'react-router-dom'
import App from '../App'
import Axios from 'axios'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

class Login extends React.Component {

    constructor(props) {
        super(props)
        //console.log( this.props )
        this.state = { logged_in: this.props.logged_in }
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(e) {
        e.preventDefault();
        Axios.post('https://api.opsboard.cloud/login', {
            user: document.getElementById('user').value,
            pass: document.getElementById('pass').value
        }).then(res => {
            if (res.data.token !== undefined) {
                this.setState({ logged_in: true })
                window.sessionStorage.setItem('token', res.data.token);
                window.sessionStorage.setItem('menu', res.data.menu);
            } else {
                console.log(res.data.errore)
            }
        })
        //this.setState({ logged_in : true })
    }

    render() {

        if (this.state.logged_in) {
            return (
                <App logged_in={this.state.logged_in} sidebar={this.props.sidebar} />
            )
        } else {

            return (
                <Container>
                    <div className="card o-hidden border-0 shadow-lg" style={{ marginTop: 200 }}>
                        <Row>
                            <Col lg={6} className="d-none d-lg-block bg-login-image"></Col>
                            <Col lg={6}>
                                <div className="p-5">
                                    <h1 className="h4 text-gray-900 mb-4 text-center">Login</h1>
                                    <Form className="user">
                                        <Form.Group controlId="user">
                                            <Form.Control type="email" placeholder="Inserisci email ..." />
                                        </Form.Group>
                                        <Form.Group controlId="pass">
                                            <Form.Control type="password" placeholder="Password ..." />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" className="float-right" onClick={this.handleLogin}>Login</Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            )
        }
    }


}

export default Login