import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { LinkContainer } from "react-router-bootstrap"

function MainNavbar() {
  return (
    <Navbar bg="secondary" variant="dark" expand="md" className="py-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav variant="pills" className="fs-5">
            <LinkContainer to="">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="about-me">
              <Nav.Link>About me</Nav.Link>
            </LinkContainer>
            <LinkContainer to="hobbies">
              <Nav.Link>Hobbies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="projects">
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
