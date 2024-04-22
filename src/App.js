import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <MainSection />
      <Footer />
    </div>
  );
};

export default App;
