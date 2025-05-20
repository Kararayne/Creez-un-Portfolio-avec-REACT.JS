import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';
import { NavLink, } from 'react-router-dom';



function Header() {
  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary bg-dark border-bottom border-body bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">John Doe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav collapse">
          <Nav>
            <>
           <Nav.Link> <NavLink to="/" style={({ isActive}) => ({
           color: isActive ? 'red' : 'white',
           textDecoration: isActive ? 'underline' : 'none',})}
           >
            HOME
            </NavLink> </Nav.Link></>

            <Nav.Link><NavLink  to="/services"style={({ isActive}) => ({
           color: isActive ? 'red' : 'white',
           textDecoration: isActive ? 'underline' : 'none',})}>SERVICE
            </NavLink></Nav.Link>

            <Nav.Link><NavLink to="/portfolio"style={({ isActive}) => ({
           color: isActive ? 'red' : 'white',
           textDecoration: isActive ? 'underline' : 'none',})}>PORTFLOIO
            </NavLink></Nav.Link>

           <Nav.Link> <NavLink  to="/contact"style={({ isActive}) => ({
           color: isActive ? 'red' : 'white',
           textDecoration: isActive ? 'underline' : 'none',})}>CONTACT
           </NavLink></Nav.Link>

            <Nav.Link><NavLink to="/mentionslegales"style={({ isActive}) => ({
           color: isActive ? 'red' : 'white',
           textDecoration: isActive ? 'underline' : 'none',})}> MENTIONS LEGALES
            </NavLink></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>     
    </>   
  );
}

export default Header;