import "./about.css";
import grpic from "./d1.jpg";

function AboutComponent(){
    return(
        <section id='about' className='Abt_Us'>
            <div className='abt_us_1'>
                <div className='abt_us_cont'>
                    <h1>ABOUT US</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <img className='grpic' src={grpic} alt='grpic'></img>
            </div>
            <div className='abt_us_2'>
                <div className='mission box'>
                    <div className='rkt_icon icon'></div>
                    <h2>OUR MISSION</h2>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                </div>
                <div className='vision box'>
                    <div className='eye_icon icon'></div>
                    <h2>OUR VISION</h2>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
                </div>
            </div>
        </section>
    );
}

export default AboutComponent


