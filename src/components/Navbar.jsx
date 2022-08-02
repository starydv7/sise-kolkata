import React from 'react'
import styles from "./navbar.module.css";
import HomePage from './HomePage';
import { Link, useNavigate } from "react-router-dom";
import About from './About';
import Talent from './Talent';
const Navbar = () => {
  return (
      <div>
          <div className={styles.navbar}>
        <div className={styles.navbar1}> 
          <img src='http://www.sise.in/images/logo.png' />
          <div className={styles.navbar2}>
           <Link to=""></Link>
      <Link to="/about">ABOUT</Link>
      <Link to="/talent">TALENT MANAGEMENT</Link>
            <Link to="/digital">DIGITAL MARKETING</Link>
            <Link to="/sponser">SPONSERSHIP SALES AND BRANDING</Link>
      <Link to="/music">MUSIC</Link>
      <Link to="/contact">CONTACT</Link>
          </div>
        </div>
          
      </div> 
          <HomePage />
          <About />
          <Talent/>
    </div>
  )
}

export default Navbar