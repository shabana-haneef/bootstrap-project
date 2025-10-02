import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Navbar';
import Contact from './Contact';
import Products from './Products';

export default function App() {
  return (
    <div>
      <Contact/>
      <Navbars/>
      <Products/>
      
    </div>
  )
}
