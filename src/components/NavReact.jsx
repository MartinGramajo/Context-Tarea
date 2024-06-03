import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";
import { useContext, useState } from "react";
import { UseHeroesContext } from "../context/UseHeroesContext";
import { Form } from "react-bootstrap";

export default function NavReact() {
  const [query, setQuery] = useState("");
  const { searchHeroes } = useContext(UseHeroesContext);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchHeroes(value);
  };
  return (
    <Navbar variant="dark" expand="lg" id="principal">
      <Container>
        <Navbar.Brand className="logo-texto" as={Link} to="/">
          Rolling-code
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/marvel">
              Marvel
            </Nav.Link>
            <Nav.Link as={NavLink} to="/dc">
              DC
            </Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                value={query}
                onChange={handleSearch}
                placeholder="Buscar Heroe"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <div className="ms-auto">
            <DarkModeSwitch />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
