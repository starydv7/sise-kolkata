import React from 'react'
import image from "../images/talent-section.png";
const Talent = () => {
  return (
      <div style={{ height: "700px", width: "100%", border: '1px solid red',display:"flex"}}>

       
      
       <div style={{height:"100%",width:"50%",border:'1px solid red'}}> <img style={{height:"100%",width:"100%"}} src={image} alt="" /></div>
       <div style={{height:"100%",width:"50%",border:'1px solid teal'}}>
              <p style={{
                  color: "#34c6f3",
                  
                  fontSize: "100px", fontFamily: "sans-serif",
                  fontStretch: "extra-expanded",
                 fontWeight:"lighter"

        }}>TALENT</p>
              <p style={{
                  color: "#a6cf46",
                  marginTop:"-90px",
                  fontSize: "100px", fontFamily: "sans-serif",
                  fontStretch: "extra-expanded",
                 fontWeight:"lighter"

        }}>MANAGEMENT</p>
        <button style={{color:"#4c4c4c",marginTop:"-150px"}}>EXPLORE +</button>

       </div>
       
    </div>
  )
}

export default Talent;
// //  
// //           <div>sdbbd</div>