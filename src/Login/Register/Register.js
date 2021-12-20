import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../containers/Header';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
           <div>
            <Header/>
 <Container> 
                <h2 className="text-white fw-lighter mt-5">Please Register</h2>
                <Form className="mt-5" type="submit">
                    <Form.Group className="mb-3 text-white w-75" controlId="formBasicEmail" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control

                        name="email"
                        type="email"
                        onBlur={handleOnChange} 
                        placeholder="Enter Your Name"
                         />
                    </Form.Group>
                    <Form.Group className="mb-3 text-white w-75" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onBlur={handleOnChange}
                        />

                    </Form.Group>

                    <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
                        <Form.Label className="text-white">Password</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password2"
                        onBlur={handleOnChange}
                         />
                    </Form.Group>
                    <Button  type="submit" >Register</Button>
                    {/* <button  className="rounded-pill mt-3  px-5 btn btn-danger">Register</button>  */}
                </Form>


                {isLoading && <Spinner animation="border" variant="danger" />}
                

                <p className="text-white my-5 fw-light">Already registered ? <Link to="/login" className="text-danger fst-italic">Login Now</Link> </p>
                {user?.email && <Alert >User Created successfully!</Alert>}
                    {authError && <Alert >{authError}</Alert>}

            </Container> 
            
        </div>
    );
};

export default Register;