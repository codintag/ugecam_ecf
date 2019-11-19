import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class Navbars extends Component {
    render() {
        return (
            <div>
<Navbar collapseOnSelect expand="lg" bg="info" variant="dark" fixed="top" className="font-weight-bold">
  <Navbar.Brand href="#home">Ugecam</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto pr-5">
      <Nav.Link href="#features">Accueil</Nav.Link>
      <Nav.Link href="#pricing">Notre vision</Nav.Link>
      <Nav.Link href="#pricing">Histoire</Nav.Link>
      <Nav.Link href="#deets">Formations</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link className="pl-5" href="#deets">Contact</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        S'inscrire
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default Navbars;