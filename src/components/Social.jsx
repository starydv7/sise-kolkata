import React from 'react';
import "./Social.css";
import logoimage from "../images/Home Final-2.jpg";
import mainak from "../images/mainak.jpg";
import actress from "../images/actress.jpg";
import award from '../images/award.jpg';
import sakib from '../images/sakib.jpg';
import fbPost from '../images/fbPost.jpg'
const Social = () => {
  return (
      <div className='social'>
          <div className='insta-bac' style={{ width: "50%" }}>
              <h1 style={{ color: "white", textAlign:'left',marginLeft:'84px'}}>Instagram</h1>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly' }}>
                  <div style={{ backgroundColor: 'white', padding: '25px', margin: '20px', height: '80px' }}><img style={{ width: '125px', marginTop: '20px' }} src={logoimage}></img> </div>
                  <div style={{ padding: "15px" }}>
                      <h3 style={{ color: 'white' }}>Instagram Feed</h3>
                      <h5 style={{ color: 'white' }}>Lorem Ipsum is simply dummy text of the printing</h5>
                  </div>
              </div>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly' }}>
                  <div style={{ backgroundColor: 'white', padding: '25px', margin: '20px', height: '80px' }}><img style={{ width: '125px', marginTop: '20px' }} src={logoimage}></img> </div>
                  <div style={{ padding: "15px" }}>
                      <h3 style={{ color: 'white' }}>Instagram Feed</h3>
                      <h5 style={{ color: 'white' }}>Lorem Ipsum is simply dummy text of the printing</h5>
                  </div>
              </div>
              <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-evenly' }}>
                  <div style={{ backgroundColor: 'white', padding: '25px', margin: '20px', height: '80px' }}><img style={{ width: '125px', marginTop: '20px' }} src={logoimage}></img> </div>
                  <div style={{ padding:"15px"}}>
                      <h3 style={{ color:'white'}}>Instagram Feed</h3>
                      <h5 style={{ color: 'white' }}>Lorem Ipsum is simply dummy text of the printing</h5>
                  </div>
              </div>
          </div>
          <div style={{ width: "50%" }} className='fb-bac'>
              <h1 style={{ color: "white", textAlign: 'left', marginLeft: '84px' }}>Facebook</h1>
              <div style={{width:"80%", textAlign:'center'}}>
                  <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-between' }}> 
                      <div style={{ width: '50%',height:'270px', overflow: 'hidden', marginLeft:"85px", borderRadius:'15px' }}><img style={{width:'100%',height:'100%'}} src={fbPost}></img> </div>
                      <div style={{ display: 'flex', width: '30%', justifyContent: 'inherit', flexDirection:'column'}}>
                          <div style={{ overflow: 'hidden', height: '125px', width: '125px', borderRadius:'15px' }}><img style={{ width: '100%', height: '100%' }}  src={sakib}></img></div>
                          <div style={{ overflow: 'hidden', height: '125px', width: '125px', borderRadius:'15px' }}> <img style={{width:'100%',height:'100%'}} src={award}></img></div>
                      </div>
                  </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop:'15px',marginLeft:'77px',width:'64%'}}>
                  <div style={{ overflow: 'hidden', height: '225px', width: '225px', borderRadius:'15px' }}><img style={{ width: '100%', height: '100%' }} src={actress}></img></div>
                  <div style={{ overflow: 'hidden', height: '225px', width: '225px', borderRadius:'15px' }}> <img style={{ width: '100%', height: '100%' }} src={mainak}></img></div>

              </div>
          </div>
    </div>
  )
}

export default Social