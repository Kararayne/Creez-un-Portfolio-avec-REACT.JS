import PortfolioCard from "../components/portfoliocard";
import Footer from "../components/footer";
import BackGround2 from "../components/background2";


const portfolio = () => {
  return (
    <>
      <BackGround2 />
      <h1>portfolio</h1>

      <section className="container">
        <div className="row">

            <PortfolioCard></PortfolioCard>
          <div className="center col-sm-12 col-lg-4">
            <PortfolioCard
              Src="/images/portfolio/fresh-food.jpg"
              CardTitle="FreshFood"
              CardText="site de vente de produits frais en ligne."
              CardFooter="Site réalisé avec PHP et MY SQL"
            />
          </div>
          <div className="center col-sm-12 col-lg-4">
            <PortfolioCard
              Src="/images/portfolio/restaurant-japonais.jpg"
              CardTitle="Restaurant Akira"
              CardText="site de vente de produits frais en ligne."
              CardFooter="Site réalisé avec WordPress"
            />
          </div>
          <div className="center col-sm-12 col-lg-4">
            <PortfolioCard
              Src="/images/portfolio/espace-bien-etre.jpg"
              CardTitle="Espace bien-être"
              CardText="site de vente de produits frais en ligne."
              CardFooter="Site réalisé avec LARAVEL"
            />
          </div>
          <div className="center col-sm-12 col-lg-4">
            <PortfolioCard
              Src="/images/portfolio/seo.jpg"
              CardTitle="SEO"
              CardText="Amelioration du referencement d'un site e-commerce"
              CardFooter="Utilisation des outils SEO"
            />
          </div>
          <div className="center col-sm-12 col-lg-4">
            <PortfolioCard
              Src="/images/portfolio/coder.jpg"
              CardTitle="Création d'une API"
              CardText="Creation d'une API RESTFULL publique"
              CardFooter="PHP - SYMPFONY"
            />
          </div>
          <div className="center col-sm-12 col-lg-4">
            <PortfolioCard
              Src="/images/portfolio/screens.jpg"
              CardTitle="Maquette d'un site web"
              CardText="Création d'un prototype de site"
              CardFooter="Réalisé avec Figma"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default portfolio;
