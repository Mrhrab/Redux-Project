import React from 'react';
import {  Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../containers/Header';


const Login = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Form className="mt-5">
                    <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted text-white">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="text-white">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                <button type="submit" className="rounded-pill mt-3  px-5 btn btn-danger">Login</button>

                <p className="text-white my-5 fw-light">Or not registered yet? <Link to="/register" className="text-danger fst-italic">Register Now</Link> </p>

            </Container>
            
        </div>
    );
};

export default Login;