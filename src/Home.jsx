import React from "react";
import About from './About'
import Products from './Products'
import Contact from './Contact'

export default function Home() {
  return (
    <div>
    <div className="hero-section">
      <img src="src/assets/kfc.jpeg" alt="KFC" className="hero-image" />
      <div className="hero-buttons">
        <button className=" btn-dark">Explore</button>
        <button  className=" btn-dark 2">Contact us</button>
      </div>
    </div>
    <About/>
    <Products/>
    <Contact/>
    
    </div>
  );
}
