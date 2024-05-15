import styles from "./EventComponent.module.css";
import image from "./image.png";

function EventComponent(){
    return(
        <>
        <section className={styles.evnts}>
        <div className={styles.top}>
            <div className={styles.heading}>
                <p className={styles.title}>EVENTS</p>
                <p className={styles.subtitle}>Our Upcoming Events</p>
            </div>
            <div className={styles.prevEvents}>
                PREVIOUS EVENTS →
            </div>
        </div>
        <div className={styles.outer}>
            <div className={styles.inner}>
                <div className={styles.innertxt}>
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
                    <p className={styles.desc}><b>Description :</b>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
                <img className={styles.image} src={image} alt="image.png"></img>
            </div>
        </div>
        </section>
        </>
    );
}

export default EventComponent