import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';

let bannerData = {
  heading: 'Take a break and rejuvenate.'
}

function App() {
  return (
    <div className="App">
      <Hero heading = {bannerData.heading} />
    </div>
  );
}

export default App;
