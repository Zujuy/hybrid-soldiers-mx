import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Events from '../src/components/Events';
import SignUp from '../src/components/Signup';
import Credential from '../src/components/Credential';
import LogoAnimation from './styles/logoAnimation';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 6000); // Muestra la animación durante 6 segundos
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {showAnimation ? (
        <LogoAnimation />
      ) : (
      <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/credential" element={<Credential name="John Doe" memberNumber="001" photo="https://via.placeholder.com/100" />} />
      </Routes>
    </Router>
  </>
      )}
    </>
  );
}

export default App;