
import axios from "axios"

import React, { useEffect } from "react"

export type Props={
    loading:()=>void;
}
export default function Hero(props:Props)
{
    return <div id='home' className="hero">
    <div className="hero-left" >
        <div style={{ color:'white' }}>
            <h1 className=" text-7xl font-mono font-semibold" style={{ maxWidth:'26rem' }}>CODE WHAT YOU CANT</h1>
           <div> <button className="about-us-text rounded-sm" style={{ display:'flex',alignItems:'center' }}>ABOUT US <i style={{ paddingTop:'.3rem',paddingLeft:'.3rem' }}>
            <img width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/long-arrow-right.png" alt="long-arrow-right"/></i></button></div>
        </div>
    </div>
       <div className="hero-right" >
       <iframe onLoad={props.loading} src="https://my.spline.design/particles-efe9e3a9a7cc30fcfe2152e03f85e1e9/"   ></iframe>
       </div>
      
    </div>
}