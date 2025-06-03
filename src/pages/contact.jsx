
import "../Assets/contact.css";
import { Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <div>
        <h1>Contact</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact
        </p>
      </div>
      <div className="surlign2"></div>
      <div className="accueil ">
        <div className=" accueil1 container">
          <fieldset className="size-contact col-12 col-sm-12 col-lg-6">
            <h2 className="surlign">Formulaire de contact</h2>
            <div>
              <input
                className="size-input"
                type="text"
                placeholder="votre nom"
                id="name"
                name="name"
                required
              ></input>
            </div>
            <div>
              <input
                className="size-input"
                type="email"
                placeholder="votre adresse mail"
                id="email"
                name="Email"
                required
              ></input>
            </div>
            <div>
              <input
                className="size-input"
                type="phone"
                placeholder="Votre numero de téléphone"
                id="phone"
                name="phone"
                required
              ></input>
            </div>
            <div>
              <input
                className="size-input"
                type="subject"
                placeholder="Sujet"
                id="subject"
                name="subject"
                required
              ></input>
            </div>
            <div>
              <textarea
                className="size-textarea"
                placeholder="Votre message"
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            <div className="textaligncenter">
              <Button type="submit">Envoyer</Button>
            </div>
          </fieldset>
          <div className="size-contact col-12 col-sm-12 col-lg-6">
            <h2 class="surlign">Mes coordonnées</h2>
            <h3 className="size-adress">John Doe</h3>
            <address className="size-adress"> <img src="/images/icones/map.svg" alt="logo map"></img> 40 rue Laure Diebold</address>
            <address className="size-adress"> <img src="/images/icones/geo.svg" alt="logo adress"></img> 69009 Lyon</address>
         
            <a
              class="none deco-none size-adress"
              href="tel:+331020304050"
              target="_blank"
              rel="noreferrer"
            >
              <p class="size-adress" ><img src="/images/icones/phone.svg" alt="logo téléphone"></img> 10 20 30 40 50</p>
            </a>
               <a
              class="none deco-none size-adress"
              href="mailto:john.doe@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p><img src="/images/icones/mail.svg" alt="logo mail"></img> john.doe@gmail.com </p>
            </a>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754105!2d4.796403976619974!3d45.77866571240149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2sus!4v1747761488552!5m2!1sfr!2sus"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Google Maps location of 40 Rue Laure Diebold, 69009 Lyon, France"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
