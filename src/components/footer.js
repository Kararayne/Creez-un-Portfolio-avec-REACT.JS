
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../index.css';

function Footer() {
    return (
        <footer className="bg-dark footer" data-bs-theme="dark">
          <div> 
        <h2 className="footerParagraphcolor">John Doe</h2>
        <address className="footerParagraphcolor footerparagraph">
            <p className='footerparagraph'> 40 rue Laure Diebolt </p>
            <p className='footerparagraph'> 69009 Lyon</p>
        </address >
        <a className="footerParagraphcolor" href="10 20 30 40 50" target="_blank" rel="noreferrer" >
            <p className='footerparagraph'>10 20 30 40 50</p>
        </a>
        <a className="footerParagraphcolor" href="mailto:a-houssin@hotmail.fr" target="_blank" rel="noreferrer">
            <p className='footerparagraph'>a-houssin@hotmail.fr</p>
        </a>
        </div>

        <div className="footerNav">
            <h2 className="footerParagraphcolor">Liens utiles</h2>
            <Nav className="footerNav ">
            <>
            <Nav.Link className="footerNavlink footerParagraphcolor" as={Link} to="/">
            HOME
            </Nav.Link></>

            <Nav.Link className="footerNavlink footerParagraphcolor" as={Link} to="/services">SERVICE
            </Nav.Link>

            <Nav.Link className="footerNavlink footerParagraphcolor" as={Link}to="/portfolio">PORTFLOIO
            </Nav.Link>

            <Nav.Link className="footerNavlink footerParagraphcolor" as={Link} to="/contact">CONTACT
            </Nav.Link>

            <Nav.Link className="footerNavlink footerParagraphcolor" as={Link} to="/mentionslegales"> MENTIONS LEGALES
            </Nav.Link>
            
          </Nav>
        </div>
        <div>
            <h2 className="footerParagraphcolor">Mes dernieres realisations</h2>
        </div>
        </footer>
    );
}
    export default Footer;