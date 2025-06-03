import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "../index.css";
import "../Assets/fontawesome/css/all.css";

function Footer() {
  return (
    <footer
      className=" textalign bg-dark footer paddingfooter"
      data-bs-theme="dark"
    >
      <div className="container footer">
        <div className="col-12 col-sm-12 col-lg-4">
          <h2 className="footerParagraphcolor">John Doe</h2>
          <address className="footerParagraphcolor footerparagraph">
            <p className="footerparagraph"> 40 rue Laure Diebolt </p>
            <p className="footerparagraph"> 69009 Lyon</p>
          </address>
          <a
            className="footerParagraphcolor"
            href="tel:1020304050"
            target="_blank"
            rel="noreferrer"
          >
            <p className="footerparagraph">10 20 30 40 50</p>
          </a>
          <a
            className="footerParagraphcolor"
            href="mailto:a-houssin@hotmail.fr"
            target="_blank"
            rel="noreferrer"
          >
            <p className="footerparagraph marginbottomfooter">
              a-houssin@hotmail.fr
            </p>
          </a>

          <a
            className="hoverlogo"
            href="https://github.com/github-john-doe"
            rel="nofollow"
            target="blank"
          >
            <i
              class="fa-brands fa-github"
              styleName="color: #545454;"
              alt="logo github"
            ></i>
          </a>

          <a
            className="hoverlogo"
            href="https://www.twitter.com/twitter-john-doe"
            rel="nofollow"
            target="blank"
          >
            <i
              class="fa-brands fa-twitter"
              styleName="color: #545454;"
              alt="logo twitter"
            ></i>
          </a>

          <a
            className="hoverlogo"
            href="https://www.linkedin.com/in/linkedin-john-doe"
            rel="nofollow"
            target="blank"
          >
            <i
              class="fa-brands fa-linkedin"
              styleName="color: #545454;"
              alt="logo Linkedin"
            ></i>
          </a>
        </div>
        <div className="col-12 col-sm-12 col-lg-4">
          <h2 className="footerParagraphcolor">Liens utiles</h2>
          <Nav className="footerNav ">
            <>
              <Nav.Link
                className="footerNavlink  hoverbold footerParagraphcolor"
                as={Link}
                to="/"
              >
                ACCUEIL
              </Nav.Link>
            </>

            <Nav.Link
              className="footerNavlink  hoverbold footerParagraphcolor"
              as={Link}
              to="/services"
            >
              SERVICE
            </Nav.Link>

            <Nav.Link
              className="footerNavlink hoverbold footerParagraphcolor"
              as={Link}
              to="/portfolio"
            >
              PORTFOLIO
            </Nav.Link>

            <Nav.Link
              className="footerNavlink hoverbold footerParagraphcolor"
              as={Link}
              to="/contact"
            >
              CONTACT
            </Nav.Link>

            <Nav.Link
              className="footerNavlink hoverbold footerParagraphcolor"
              as={Link}
              to="/mentionslegales"
            >
              {" "}
              MENTIONS LEGALES
            </Nav.Link>
          </Nav>
        </div>

        <div className="col-12col-sm-12 col-lg-4">
          <Nav className="footerNav">
            <h2 className="footerParagraphcolor">Mes dernieres realisations</h2>
            <Nav.Link
              className="footerNavlink footerParagraphcolor hoverbold"
              as={Link}
              to="/portfolio"
            >
              FreshFood
            </Nav.Link>

            <Nav.Link
              className="footerNavlink footerParagraphcolor hoverbold"
              as={Link}
              to="/portfolio"
            >
              Restaurant Akira
            </Nav.Link>

            <Nav.Link
              className="footerNavlink footerParagraphcolor hoverbold"
              as={Link}
              to="/portfolio"
            >
              Espace Bien-être
            </Nav.Link>

            <Nav.Link
              className="footerNavlink footerParagraphcolor hoverbold"
              as={Link}
              to="/portfolio"
            >
              SEO
            </Nav.Link>

            <Nav.Link
              className="footerNavlink footerParagraphcolor hoverbold"
              as={Link}
              to="/portfolio"
            >
              Création d'une API
            </Nav.Link>

            <Nav.Link
              className="footerNavlink footerParagraphcolor hoverbold"
              as={Link}
              to="/portfolio"
            >
              Maquette d'un site
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
