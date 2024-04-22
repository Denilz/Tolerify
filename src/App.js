import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import EmailSubscription from './components/EmailSubscription'; // Import EmailSubscription component
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <MainSection />
      <EmailSubscription /> {/* Include EmailSubscription component */}
      <Footer />
    </div>
  );
};

export default App;
