import React from 'react'
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
      <div>
          <div className={styles.navbar}>
        <div className={styles.navbar1}> 
          <img style={{width: "200px",marginLeft:"-1300px"}}  src='http://www.sise.in/images/logo.png' alt='' />
          <div className={styles.navbar2}>
           {/* <Link to="/">home</Link> */}
      <Link to="/about" onClick={() => {
              window.scrollTo(100, 300);
            }}>ABOUT</Link>
      <Link to="/talent"  onClick={() => {
              window.scrollTo(100, 550);
            }}>TALENT MANAGEMENT</Link>
            <Link to="/digital" onClick={() => {
              window.scrollTo(100, 1300);
            }}>DIGITAL MARKETING</Link>
            <Link to="/sponser" onClick={() => {
              window.scrollTo(100, 1900);
            }}>SPONSERSHIP SALES AND BRANDING</Link>
      <Link to="/music" onClick={() => {
              window.scrollTo(100, 2600);
            }}>MUSIC</Link>
      <Link to="/contact" onClick={() => {
              window.scrollTo(100, 5000);
            }}>CONTACT</Link>
          </div>
        </div>
          
      </div> 
         
    </div>
  )
}
export { Navbar };