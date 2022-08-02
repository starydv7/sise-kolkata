import React from 'react'
import { useNavigate } from 'react-router-dom';
import image from "../images/talent-section.png";
const Talent = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("./talent");
    }
  return (
      <div style={{ height: "700px", width: "100%",display:"flex"}}>

       
      
       <div style={{height:"100%",width:"50%"}}> <img style={{height:"100%",width:"100%"}} src={image} alt="" /></div>
       <div style={{height:"100%",width:"50%"}}>
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
              <button style={{ color: "#4c4c4c", marginTop: "-150px" }} onClick={handleClick}>EXPLORE +</button>

       </div>
       
    </div>
  )
}

export default Talent;
// //  
// //           <div>sdbbd</div>