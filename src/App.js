
import './index.css';
import { Route, Routes,} from 'react-router-dom';
import Home from './pages/home.jsx';
import Services from './pages/services.jsx';
import Portfolio from './pages/portfolio.jsx';
import Contact from './pages/contact.jsx';
import MentionsLegales from './pages/mentionslegales.jsx';
import Header from './components/header.js';
import Footer from './components/footer.js';



export default function App() {


    return (

  <>
  <Header />
   <Routes>
    
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentionslegales" element={<MentionsLegales />} />
    
    </Routes>    
    
    <Footer />
  </>
    );
}

  