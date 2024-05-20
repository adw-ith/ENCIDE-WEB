"use client"
import axios from "axios"
import React, { useEffect } from "react"
export default function Faqnews()
{
    useEffect(()=>{
        
        getNews()},[])
    async function getNews()
    {
        const res=await axios.get('https://newsdata.io/api/1/news?apikey=pub_4412520244b2ace4f8343ed854fe0d7c41ebc&q=programming&language=en&category=technology ')
        console.log(res.data.results)
    }
    return <section className=' grid md:grid-cols-2 grid-cols-1  bg-faqbg'>
        <div className=' col-span-1 p-4 bg-slate-800'>
            <div className=' p-8 w-full'>
                <h1 className=' text-center text-5xl text-slate-100  font-semibold'>Whats new in our world</h1>
                <div className=" relative group backdrop-blur-2xl text-white px-7 py-5 mt-5 rounded-xl shadow-2xl border border-slate-700">
                    <div className=" -z-10 absolute group-hover:top-36 group-hover:left-36 ease-in-out duration-700 top-16 left-14 w-16 h-16 rounded-full bg-white blur-3xl"></div>
                    <div className=" py-4 px-2 pt-0 sm:pt-4 sm:px-11"><img className=" w-full h-auto mt-6 rounded-lg shadow-sm group-hover:shadow-2xl" src="https://www.teslarati.com/wp-content/uploads/2024/01/Tesla-Cybertruck-2024-production-builds-to-be-sold-out-soon-.jpg" alt="" /></div>
                    <h1 className=" mt-3 text-2xl font-semibold">heading</h1>
                    <p className=" mt-4 text-slate-400 group-hover:text-white ease-in-out duration-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente doloribus officiis rerum quasi distinctio expedita facilis ipsam asperiores libero accusantium, sequi pariatur fugiat officia ratione nam consequuntur qui placeat?</p>
                </div>
            </div>
        </div>
        <div className=' col-span-1 p-4 bg-slate-700'>
            <div className=' p-4 pt-8 w-full '>
        <h1 className=' text-center text-5xl text-white font-semibold '>Contact Us</h1>
       <form action="" className='pb-8 p-3 text-white bg-transparent grid gap-3 shadow-2xl rounded-lg mt-5 '>
        <input required placeholder='email' className='ease-in-out duration-500 focus:text-lg outline-none w-full  p-2 py-4 mt-8 bg-transparent hover:shadow-md' type="email" name="" id="" />
       <input required placeholder='name'  className='ease-in-out duration-500 focus:text-lg outline-none w-full mt-4 p-2 py-4  bg-transparent hover:shadow-md' type="text" name="" id="" />
       <input required placeholder='subject'  className='ease-in-out duration-500 focus:text-lg outline-none w-full mt-4 p-2 py-4  bg-transparent hover:shadow-md' type="text" name="" id="" />
       <textarea required placeholder='your message' className='ease-in-out duration-500 focus:text-lg outline-none w-full min-h-24 p-2 mt-4 hover:shadow-md bg-transparent' name="" id="" ></textarea>
       <button className=' rounded-md max-w-28 mt-6 h-14 bg-slate-800 hover:bg-slate-900 ease-in-out duration-500  text-lg font-semibold hover:text-2xl p-2 px-3 text-white' type="submit">submit</button>
       <p className=" pt-4 opacity-75">send us a hi</p></form>
        </div>
        </div>

    </section>
}