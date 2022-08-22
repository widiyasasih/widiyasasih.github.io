import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Cv from './pages/cv/Cv';
import Experience from './pages/experience/Experience';
import Network from './pages/network/Network';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Network />
      <Cv />
    </Router>
  );
};

export default App;
