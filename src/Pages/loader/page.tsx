import React from 'react'
export default function Loader()
{
    return <div style={{zIndex:'9999' }} className=" fixed z-50 top-0 left-0 w-dvw h-dvh bg-slate-900 flex flex-col justify-center items-center">
    <div className=" w-24 h-24 rounded-lg bg-slate-300 animate-bounce flex justify-center items-end shadow-lg "> <div className=' shadow-2xl w-10 h-10 bg-slate-900 animate-bounce rounded-md'></div></div>
    <h1 className=" mt-6 text-white animate-pulse">something's cooking...</h1>
  </div>
}