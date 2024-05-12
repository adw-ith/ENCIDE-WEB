import React from "react"



export default function Hero()
{
    return <div className="hero">
    
    <div className="hero-left" >
        <div style={{ color:'white' }}>
            <h1 style={{ maxWidth:'26rem' }}>CODE WHAT YOU CANT</h1>
           <div> <button style={{ display:'flex',alignItems:'center' }}>ABOUT US <i style={{ paddingTop:'.3rem',paddingLeft:'.3rem' }}>
            <img width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/long-arrow-right.png" alt="long-arrow-right"/></i></button></div>
        </div>
    </div>
       <div className="hero-right" >
       <iframe src="https://my.spline.design/particles-efe9e3a9a7cc30fcfe2152e03f85e1e9/" frameborder="0"  ></iframe>
       </div>
      
    </div>
}