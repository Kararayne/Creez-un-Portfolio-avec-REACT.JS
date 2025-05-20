import Footer from "../components/footer";
import Header from "../components/header";

const Contact = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <fieldset>
        <div>
          <input
            type="text" placeholder="votre nom" id="name" name="name" required
          ></input>
        </div>
        <div>
            <input type="email" placeholder="votre adresse mail" id="email"
            name="Email" required></input>
        </div>
        <div>
            <input type="phone" placeholder="Votre numero de téléphone" id="phone"
            name="phone" required></input>
        </div>
        <div>
            <input type="subject" placeholder="Sujet" id="subject"
            name="subject" required></input>
        </div>
        <div>
            <textarea placeholder="Votre message" id="message"
            name="message" required></textarea>
        </div>
      </fieldset>
      <Footer />
    </div>
  );
};

export default Contact;