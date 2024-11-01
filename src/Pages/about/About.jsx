import "./about.css";
import grpic from "./d1.jpg";

function AboutComponent(){
    return(
        <section id='about' className='Abt_Us'>
            <div className='abt_us_1'>
                <div className='abt_us_cont'>
                    <h1>ABOUT US</h1>
                    <p>Our community brings together passionate programmers creating a vibrant ecosystem of knowledge sharing and skill development.Engage in challenging coding competitions, hackathons, and coding challenges that push your limits and help you become a better programmer.</p>
                </div>
                <img className='grpic' src={grpic} alt='grpic'></img>
            </div>
            <div className='abt_us_2'>
                <div className='mission box'>
                    <div className='rkt_icon icon'></div>
                    <h2>OUR MISSION</h2>
                    ENCIDE, the premier coding club of Mar Athanasius College of Engineering, is dedicated to fostering a community of passionate coders, developers, and tech enthusiasts.
                </div>
                <div className='vision box'>
                    <div className='eye_icon icon'></div>
                    <h2>OUR VISION</h2>
                    
 The club provides a supportive and inclusive peer-to-peer learning environment where members can share knowledge, exchange ideas, and work together on exciting coding projects.
                </div>
            </div>
        </section>
    );
}

export default AboutComponent


