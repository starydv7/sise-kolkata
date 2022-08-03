import React from 'react'
import image from "../images/rider.png";
const Sponser = () => {
  return (
      <div style={{ height: "700px", width: "100%",display:"flex"}}>

       
      
       <div style={{height:"100%",width:"50%"}}> <img style={{height:"100%",width:"100%"}} src={image} alt="" /></div>
       <div style={{height:"100%",width:"50%"}}>
        <p style={{
                  color: "#34c6f3",
                  marginTop:"150px",
                  fontSize: "80px", fontFamily: "sans-serif",
                  fontStyle:"Gandhi",
                  fontWeight: "lighter",
                  transform: "scale(1, 1)",
                 fontfamily:"Helvetica Neue, Helvetica, Arial, sans-serif"

        }}>SPONSERSHIP <br></br>
                  SALES
              </p>
        <p style={{
                  color: "#a6cf46",
                  marginTop:"-90px",
                  fontSize: "80px", fontFamily: "sans-serif",
                  fontStretch: "extra-expanded",
                 fontWeight:"lighter"

        }}> & BRANDING </p>
        <button style={{color:"#4c4c4c",marginTop:"-150px"}}>EXPLORE +</button>

       </div>
       
    </div>
  )
}

export default Sponser