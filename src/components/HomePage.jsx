import React from 'react'
import styles from "./homepage.module.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
    faInstagram,
  
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from './About';
import Talent from './Talent';
import Digital from './Digital';
import Sponser from './Sponser';
import Music from './Music';
import Footer from './Footer';
import Social from './Social';
const HomePage = () => {
  return (
      <div>
          <div className={styles.second}>
              SECOND INNINGS
          </div>
          <div className={styles.sports}>
              SPORTS 
              <div className={styles.and}>
                  AND
              </div>
          </div>
          <div className={styles.enter}>
              ENTERTAINMENT
          </div>
          <div className={styles.follow}>
              <p>Follow Us on</p>
              <div className={styles.social}>
         <div style={{marginTop:"10px",marginLeft:"10px",display:"flex",backgroundColor:"white"}}>
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
       <br></br>
          <About />
          <Talent />
          <Digital />
          <Sponser />
          <Music />
          <Social/>
          <Footer/>
    </div>
  )
}

export default HomePage