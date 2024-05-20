import './navbar.css';


function NavComponent(){
    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
    };
    const hideSidebar= () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
    }

    return(
        <>
        <nav className='navbar'>
            <div className='logo'><a href="home">ENCIDE</a>
            </div>
            <ul className='sidebar'>
                <li onClick={hideSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li><a href='#'>HOME</a></li>
                <li><a href='#'>ABOUT</a></li>
                <li><a href='#'>TEAM</a></li>
                <li><a href='#'>CONTACT</a></li>
                <li><a href='#'>EVENTS</a></li>

            </ul>
            <ul className='nav_main'>
                <li className='home cur hideOnMobile'><a href="home">HOME</a></li>
                <li className='about cur hideOnMobile'><a href="#">ABOUT</a></li>
                <li className='team cur hideOnMobile'><a href="#">TEAM</a></li>
                <li className='contact cur hideOnMobile'><a href="#">CONTACT</a></li>
                <li className='events hideOnMobile'><li className='in_bord'><a href="#">EVENTS</a></li></li>
                <li className='menu_button' onClick={showSidebar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
            </ul>            
        </nav>
    
        </>
    );
}
export default NavComponent