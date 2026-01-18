import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Navigationbar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
        <img
          src="https://reactjs.org/logo192.png"
          width="25"
          height="25"
          alt="logo"
        />
          Magasin
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/add">
            Ajouter une voiture
          </Nav.Link>
          <Nav.Link as={Link} to="/list">
            Liste des Voitures
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}
