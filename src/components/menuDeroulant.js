import Accordion from "react-bootstrap/Accordion";

function MenuDeroulant() {
  return (
    <Accordion defaultActiveKey="0" className="accordion">
      <div className="accordioncss">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Editeur du site</Accordion.Header>
          <Accordion.Body className="textalign">
            <h3>John Doe</h3>
            <address className="size-adress">
              {" "}
              <img src="/images/icones/map.svg" alt="logo map"></img> 40 rue
              Laure Diebold
            </address>{" "}
            <address className="size-adress">
              <img src="/images/icones/geo.svg" alt="logo adress"></img> 69009
              Lyon
            </address>
            <a
              class="none"
              href="mailto:john.doe@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p class="none size-adress">
                <img src="/images/icones/mail.svg" alt="logo mail"></img>{" "}
                john.doe@gmail.com{" "}
              </p>
            </a>
            <a
              class="none1"
              href="tel:+331020304050"
              target="_blank"
              rel="noreferrer"
            >
              <p>
                {" "}
                <img src="/images/icones/phone.svg" alt="logo phone"></img> 10
                20 30 40 50
              </p>{" "}
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body className="textalign">
            <h2>alwaysdata</h2>
            <address>91 rue du Faubourg Saint-Honoré, 75008 Paris</address>
            <a
              href="https://www.alwaysdata.com"
              target="_blank"
              rel="noreferrer"
            >
              www.alwaysdata.com
            </a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body className="textalign">
            <h2>Crédits</h2>
            <div>
              <p>
                ce site a été réalisé par John Doe, étudiant au{" "}
                <a
                  href="https://www.centre-europeen-formation.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  centre europeen de formation
                </a>
              </p>
              <p>
                Les images utilisées sur ce site sont libre de droits et ont été
                obtenues sur le site{" "}
                <a
                  href="https://pixabay.com/fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pixabay
                </a>
              </p>
              <p>
                La favicon de ce site a été fournie par{" "}
                <a
                  href="https://www.flaticon.com/de/kostenlose-icons/john-doe"
                  target="_blank"
                  rel="noreferrer"
                >
                  John doe Icons erstellt von Freepik - Flaticon
                </a>
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </div>
    </Accordion>
  );
}

export default MenuDeroulant;
