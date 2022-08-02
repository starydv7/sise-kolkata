import React from 'react'
import styles from "./navbar.module.css";
import HomePage from './HomePage';
import { Link } from "react-router-dom";
import About from './About';
import Talent from './Talent';
import Digital from './Digital';
import Sponser from './Sponser';
import Music from './Music';
import Footer from './Footer';
const Navbar = () => {
  return (
      <div>
          <div className={styles.navbar}>
        <div className={styles.navbar1}> 
          <img style={{width: "200px",marginLeft:"-1300px"}}  src='http://www.sise.in/images/logo.png' alt='' />
          <div className={styles.navbar2}>
           {/* <Link to="/">home</Link> */}
      <Link to="/about">ABOUT</Link>
      <Link to="/talent">TALENT MANAGEMENT</Link>
            <Link to="/digital">DIGITAL MARKETING</Link>
            <Link to="/sponser">SPONSERSHIP SALES AND BRANDING</Link>
      <Link to="/music">MUSIC</Link>
      <Link to="/contact">CONTACT</Link>
          </div>
        </div>
          
      </div> 
         
    </div>
  )
}
export { Navbar };