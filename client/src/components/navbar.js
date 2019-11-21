import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

class Navbars extends Component {
    render() {
        return (
            <div>
<Navbar collapseOnSelect expand="lg" bg="info" variant="dark" fixed="top" className="font-weight-bold">
  <Navbar.Brand >Ugecam</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto pr-5">
      <Nav.Link ><Link className="text-decoration-none text-light" to = "/">Accueil</Link></Nav.Link>
      <Nav.Link ><Link className="text-decoration-none text-light" to = "/vision">Notre vision</Link></Nav.Link>
      <Nav.Link ><Link className="text-decoration-none text-light" to = "/histoire">Histoire</Link></Nav.Link>
      <Nav.Link ><Link className="text-decoration-none text-light" to = "/formations">Formations</Link></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link className="pl-5" href="#deets"><Link className="text-decoration-none text-light" to = "/contact">Contact</Link></Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <Link className="text-decoration-none text-light" to = "/inscription">S'inscrire</Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}

export default Navbars;