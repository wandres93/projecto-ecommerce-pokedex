import CartWidget from "./CartWidget";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt="logo"
            width="40"
            height="40"
            className="me-2"
          />
          PokéStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/electrico">
              Eléctrico
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/fuego">
              Fuego
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/agua">
              Agua
            </Nav.Link>
            <Nav.Link as={NavLink} to="/category/planta">
              Planta
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
