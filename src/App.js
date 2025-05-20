import React from 'react';
import {useEffect, useState } from 'react';
import './index.css';
import { Route, Routes,} from 'react-router-dom';
import Home from './pages/home.jsx';
import Services from './pages/services.jsx';
import Portfolio from './pages/portfolio.jsx';
import Contact from './pages/contact.jsx';
import MentionsLegales from './pages/mentionslegales.jsx';




export default function App() {

  const [users, setUsers] = useState([]);
    
  const getUsers = async () => {
      const res = await fetch("https://api.github.com/users/github-john-doe");
      const json = await res.json();
      setUsers(json);
    }

      useEffect(() => {
    getUsers();
  }, []);
    return (


  <>
   <Routes>
    
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentionslegales" element={<MentionsLegales />} />
    
    </Routes>    
    
  </>
    );
}

  