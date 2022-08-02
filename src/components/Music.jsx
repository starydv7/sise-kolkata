import React from 'react'
import image from "../images/music.png";
const Music = () => {
  return (
      <div style={{ height: "700px", width: "100%", border: '1px solid red',display:"flex"}}>

       
      
      
       <div style={{height:"100%",width:"50%",border:'1px solid teal'}}>
        <p style={{

        }}>TALENT</p>
        <p>MANAGEMENT</p>
        <button>EXPLORE +</button>

          </div>
          <div style={{height:"100%",width:"50%",border:'1px solid red'}}> <img style={{height:"100%",width:"100%"}} src={image} alt="" /></div>
       
    </div>
  )
}

export default Music