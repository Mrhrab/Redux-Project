import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


const Header = () => {
  return (
     <div>

         <Navbar bg="warning" variant="dark" className="p-3">
            <Container>
            <Navbar.Brand ><span className="text-primary ">Fancy</span>  <span className=" text-info"> Mart</span></Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link >Home</Nav.Link>    
            </Nav>
          </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
  );
};

export default Header;
