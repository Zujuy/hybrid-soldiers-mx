import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Events from '../src/components/Events';
import SignUp from '../src/components/Signup';
import Credential from '../src/components/Credential';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/credential" element={<Credential name="John Doe" memberNumber="001" photo="https://via.placeholder.com/100" />} />
      </Routes>
    </Router>
  );
}

export default App;