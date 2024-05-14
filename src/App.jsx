import { useState } from "react";
import "./App.css";
import Faqnews from "./Pages/Faqnews/page";
import Hero from "./Pages/hero/page";
import Practice from "./Pages/Practice/Practice"

function App() {
 const[load,setLoad]=useState(true)
  return <>
  {load&& <div style={{zIndex:'9999' }} className=" fixed z-50 top-0 left-0 w-dvw h-dvh bg-slate-900 flex flex-col justify-center items-center">
    <div className=" w-24 h-24 rounded-lg bg-slate-50 animate-spin"></div>
    <h1 className=" mt-6 text-white">loading in progress....</h1>
  </div>}
    <Hero loading={()=>setLoad(false)}/>
  <Practice/>
  <Faqnews/></>;
}

export default App;