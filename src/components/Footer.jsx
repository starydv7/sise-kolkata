import React from 'react'
import styles from "../components/footer.module.css";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import logo from "../images/logo.png";
import {
  faYoutube,
  faFacebook,
  faTwitter,
    faInstagram,
  
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
        <div style={{ height: "200px", width: "100%",display:"flex"}}>
          <div style={{ height: "100%", width: "50%" }}>
        <img style={{ width: "200px", marginLeft: "-10px", marginTop: "30px" }} src={logo } alt='' />
          </div>
      <div style={{ height: "100%", width: "50%",marginTop:'20px' }}>
         <div>
        <FaPhone className={styles.icon1} style={{width:"80px" ,height:"18px",marginLeft: "180px",color: " #18d26e"}}/>
          <p className={styles.addno}>033 2334-9495</p>
        </div>
         <div>
        <GrMail className={styles.icon1} style={{width:"80px" ,height:"18px",marginLeft: "180px",color: " #18d26e"}}/>
          
          <p className={styles.add}>rudradeep@sise.com</p>
           <GrMail className={styles.icon1} style={{width:"80px" ,height:"18px",marginLeft: "180px",color: " #18d26e"}}/>
         
          <p className={styles.add5}>rwittika@sise.com</p>
       </div>
        <div>
        <FaHome className={styles.icon1} style={{width:"80px" ,height:"18px",marginLeft: "180px",marginTop:"-8px",color: " #18d26e"}}/>
          <p className={styles.add1}>BD-357,Salt Lake,Sector-1 Kolkata-700064</p>
        </div>
       
       
        <div style={{marginLeft:"-780px",padding:"5em"}}>
          Folllow us on
          <div>
             <a
          href="https://www.youtube.com/c/jamesqquick"
          className="youtube social"
                  >
                      
          <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>
            <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
              <a
          href="http://www.instagram.com/larnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="1x"color='rgb(51, 197, 25,0.7)' />
            </a>
             <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="1x"color='rgb(51, 197, 25,0.7)' />
                  </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer