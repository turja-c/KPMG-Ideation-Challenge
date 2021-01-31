import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from 'react-bootstrap/Image'

export default function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <div className="container">
      <Navbar.Brand href="HomePage" >
      <Image src="images/logo.png" height="50"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto ">
          <Nav.Link href="">Pricing</Nav.Link>
          &nbsp; &nbsp;
          <Nav.Link href="">About</Nav.Link>
          &nbsp; &nbsp;
          <Nav.Link href="">Contact</Nav.Link>
          &nbsp; &nbsp;
          &nbsp; &nbsp;
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    </>
  );
}