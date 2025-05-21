import Footer from "../components/footer";
import BackGround2 from "../components/background2";
import ServiceCard from "../components/ServiceCard";

const services = () => {
    return (
        <div>
        <BackGround2/>
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <div className="surlign2"></div>
        <section className="container">
        <div className="row">
        <div className="center col-sm-12 col-lg-4">
            <ServiceCard
              Src="/images/icones/pinceau.png"
              cssStyle="cssStyle"
              CardTitle="UX Design"
              CardText="L'ux design est une discipline qui consiste a concevoir des produits (site web, applicartions mobile, logiciels, objets connectés etc...)
                         en plaçant l'utilisateur au centre des proccupation. L'objectif est de rendre l'experience utilisateur la plus fluide et agreable possible."
              
            />
          </div>
          <div className="center col-sm-12 col-lg-4">
            <ServiceCard
              Src="/images/icones/html.png"
              cssStyle="cssStyle"
              CardTitle="Développement web"
              CardText="Le développement de site webconsiste a créer des sites interneten utilisant des langages de programmation (HTML, CSS, Javascript, PHP, etc) et des frameworks (Bootstrap, React, Angular etc) "
              
            />
          </div>
          <div className="center col-sm-12 col-lg-4">
            <ServiceCard
              Src="/images/icones/loupe.png"
              cssStyle="cssStyle"
              CardTitle="Référencement"
              CardText="Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les resultats des moteurs de recherche (Google, Bing, Yahoo, etc.)
                       L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site."
              
              
            />
          </div>
          </div>
          </section>
        <Footer/>
        </div>
    )
}

    export default services;