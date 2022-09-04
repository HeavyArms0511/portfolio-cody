import React from 'react'
import './navigation.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navigationLinks } from '../../Helpers/navigationLinks'

function createLinks(){
    return navigationLinks.map((e, index) => (
        <Nav.Link key={index} href={e.ref}>{e.name}</Nav.Link>
    ))
}


function NavigationBar() {
  return (
    <div id="home">
        <Navbar className="nav_container" expand="md">
        <Navbar.Brand style ={{ marginLeft: '1rem'}}href="#home">Cody Mundy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRigh: '1rem', borderColor: 'none'}}>
            <Nav className="links" style={{ margin: '0 1rem'}}>
            {createLinks()}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default NavigationBar