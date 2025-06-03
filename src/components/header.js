import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary bg-dark border-bottom border-body bg-body-tertiary"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>John Doe</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav collapse">
            <Nav>
              <>
                <Nav.Link>
                  {" "}
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      color: "white",
                      textDecoration: isActive ? "underline" : "none",
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                  >
                    HOME
                  </NavLink>{" "}
                </Nav.Link>
              </>

              <Nav.Link className="hover maj">
                <NavLink
                  to="/services"
                  style={({ isActive }) => ({
                    color: "white",
                    textDecoration: isActive ? "underline" : "none",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  services
                </NavLink>
              </Nav.Link>

              <Nav.Link className="hover maj">
                <NavLink
                  to="/portfolio"
                  style={({ isActive }) => ({
                    color: "white",
                    textDecoration: isActive ? "underline" : "none",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  portfolio
                </NavLink>
              </Nav.Link>

              <Nav.Link className="hover maj">
                {" "}
                <NavLink
                  to="/contact"
                  style={({ isActive }) => ({
                    color: "white",
                    textDecoration: isActive ? "underline" : "none",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  contact
                </NavLink>
              </Nav.Link>

              <Nav.Link className="hover maj">
                <NavLink
                  to="/mentionslegales"
                  style={({ isActive }) => ({
                    color: "white",
                    textDecoration: isActive ? "underline" : "none",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  {" "}
                  mentions legales
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
