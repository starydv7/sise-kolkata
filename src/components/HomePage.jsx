import React from 'react'
import styles from "./homepage.module.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
    faInstagram,
  
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              <div className={styles.youtube}>
               <a
          href="https://www.youtube.com/c/jamesqquick"
          className="youtube social"
                  >
                      
          <FontAwesomeIcon icon={faYoutube} size="1x" />
                  </a>
              </div>
              <div className={styles.facebook}>
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="1x" />
                  </a>
              </div>
              <div className='insta'>
        <a
          href="http://www.instagram.com/larnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="1x"color='rgb(51, 197, 25,0.7)' />
                  </a>
              </div>
              <div className={styles.twitter}>
        <a href="https://wwww.twitter.com" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="1x"color='rgb(51, 197, 25,0.7)' />
                  </a>
                  </div>
                  </div>
          </div>
    </div>
  )
}

export default HomePage