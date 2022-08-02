import React from 'react'
import image from "../images/laptop.png";

const Digital = () => {
  return (
       <div style={{ height: "700px", width: "100%",display:"flex"}}>

       <div style={{height:"100%",width:"50%",marginTop:"30px"}}>
        <p style={{
                  color: "#34c6f3",
                  marginTop:"150px",
                  fontSize: "100px", fontFamily: "sans-serif",
                  fontStyle:"Gandhi",
                  fontWeight: "lighter",
                  transform: "scale(1, 1)",
                 fontfamily:"Helvetica Neue, Helvetica, Arial, sans-serif"

        }}>DIGITAL</p>
        <p style={{
                  color: "#a6cf46",
                  marginTop:"-90px",
                  fontSize: "100px", fontFamily: "sans-serif",
                  fontStretch: "extra-expanded",
                 fontWeight:"lighter"

        }}>MARKETING</p>
        <button  style={{color:"#4c4c4c",marginTop:"-250px"}}>EXPLORE +</button>

          </div>
          <div style={{height:"100%",width:"50%"}}> <img style={{height:"100%",width:"100%"}} src={image} alt="" /></div>
       
    </div>
  )
}

export default Digital
//   <div>
//               DIGITAL <br>
//               </br>
//               <div>MARKETING</div>
           
//           </div>
//           <div>
//               <img src={image}/>
//           </div>