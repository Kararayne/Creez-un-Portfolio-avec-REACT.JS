import Header from "../components/header";
import Footer from "../components/footer";
import Accordion  from "../components/menuDeroulant";

const Mention = () => {
    return (
        <div>
        <Header/>
        <h1>Mention legales</h1>
        <div className="surlign2"></div>
        <Accordion/>
        <Footer/>
        </div>
    )
}

    export default Mention;