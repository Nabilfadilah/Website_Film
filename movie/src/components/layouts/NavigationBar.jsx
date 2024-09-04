import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationBar = () => {
  return (
    // <Navbar expand="lg" className="bg-body-tertiary">
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="#home">GobilMovie</Navbar.Brand>
        <Nav>
          <Nav.Link href="#trendingId">TREDING</Nav.Link>
          <Nav.Link href="#superheroId">SUPERHERO</Nav.Link>
        </Nav>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">TREDING</Nav.Link>
            <Nav.Link href="#link">SUPERHERO</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
