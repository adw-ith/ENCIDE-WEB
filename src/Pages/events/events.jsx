import "./events.css";
import image from './image.png';

function EventComponent(){
    return(
        <section id='events' className='evnts'>
        <div className='top'>
            <div className='heading'>
                <p className='title'>EVENTS</p>
                <p className='subtitle'>Our Upcoming Events</p>
            </div>
            <div className='prevEvents'>
                PREVIOUS EVENTS →
            </div>
        </div>
        <div className='outer'>
            <div className='inner'>
            <img className='image' src={image}alt='image.png'></img>
                <div className='innertxt'>
                    <p><b>Event Name : </b> DAWN 1.0</p>
                    <br></br>
                    <p><b>Date :</b> 22-05-2023</p>
                    <br></br>
                    <p><b>Time : </b> 7:30pm-8:30pm</p>
                    <br></br>
                    <p><b>Mode :</b> Online</p>
                    <br></br>
                    <br></br>
                    <p><b>Register here :</b> link</p>
                    <br></br>
                    <p className='desc'><b>Description :</b>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
            </div>
        </div>
        </section>
    );
}
export default EventComponent