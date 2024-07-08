// src/Navbar.js
import React, { useState, useEffect } from 'react';
import './navbar.css';

function NavComponent(){

    const navLinkEls=document.querySelectorAll('.nav_link');
    navLinkEls.forEach(navLinkEl=>{
        navLinkEl.addEventListener('click',() =>{
            document.querySelector('.active')?.classList.remove('active');
            navLinkEl.classList.add('active');
        });
    });


    const [scrollDirection, setScrollDirection] = useState(null);
    let lastScrollTop = 0;

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScrollTop) {
        setScrollDirection('down');
        } else {
        setScrollDirection('up');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    return(
        <>
        <div className={`navbar-container ${scrollDirection === 'up' ? 'scrolled-up' : 'scrolled-down'}`}>
        <nav className='MobileNav'>
            <a href="#home" className="mob nav_link"> 
                <svg className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                <p className='icontext'>Home</p>
            </a>

            <a href='#about' className='mob nav_link'>
            <svg className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"/></svg>
            <p className='icontext'>About</p>
            </a>

            <a href="#team" className='mob nav_link'>
            <svg className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg>
            <p className='icontext'>Team</p>
            </a>

            <a href="#contact" className='mob nav_link'>
            <svg className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            <p className='icontext'>Contact</p>
            </a>

            <a href="#events" className='mob nav_link'>
            <svg className='icons' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"/></svg>
            <p className='icontext'>Events</p>
            </a>

        </nav>
        </div>
        <div className={`navbar-container ${scrollDirection === 'up' ? 'scrolled-up' : 'scrolled-down'}`}>
        <nav className='navbar'>
            <div className='logo'><a href="#home">ENCIDE</a>
            </div>
            <ul className='nav_main'>
                <li className='cur nav_link'><a href="#home">HOME</a></li>
                <li className='cur nav_link'><a href='#about'>ABOUT</a></li>
                <li className='cur nav_link'><a href="#team">TEAM</a></li>
                <li className='cur nav_link'><a href="#contact">CONTACT</a></li>
                <li className='events nav_link'><li className='in_bord'><a href="#events" className='nav_link'>EVENTS</a></li></li>
                
            </ul>            
        </nav>
        </div>
    </>
    );
}
export default NavComponent

