import React from 'react'
import image from "../images/music.png";
const Music = () => {
  return (
      <div style={{ height: "700px", width: "100%",display:"flex"}}>

       
      
      
       <div style={{height:"100%",width:"50%",marginTop:"10px"}}>
        <p  style={{
                  color: "#34c6f3",
                  marginTop:"150px",
                  fontSize: "80px", fontFamily: "sans-serif",
                  fontStyle:"Gandhi",
                  fontWeight: "lighter",
                  transform: "scale(1, 1)",
                 fontfamily:"Helvetica Neue, Helvetica, Arial, sans-serif"

        }}>MUSIC</p>
        
        <button style={{color:"#4c4c4c",marginTop:"-150px"}}>EXPLORE +</button>

          </div>
          <div style={{height:"100%",width:"50%",marginTop:"-10px"}}> <img style={{height:"100%",width:"100%"}} src={image} alt="" /></div>
       
    </div>
  )
}

export default Music