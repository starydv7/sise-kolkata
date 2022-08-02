import React from 'react'

const Footer = () => {
  return (
        <div style={{ height: "700px", width: "100%", border: '1px solid red',display:"flex"}}>

       
      
          <div style={{ height: "100%", width: "50%", border: '1px solid red' }}>
              <img style={{ width: "200px", marginLeft: "-10px" }} src='http://www.sise.in/images/logo.png' alt='' />
          </div>
       <div style={{height:"100%",width:"50%",border:'1px solid teal'}}>
        <p style={{}}>TALENT</p>
        <p>MANAGEMENT</p>
        <button>EXPLORE +</button>

       </div>
       
    </div>
  )
}

export default Footer