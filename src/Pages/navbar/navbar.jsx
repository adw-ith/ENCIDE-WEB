import styles from "./navbar.module.css";
import logo from "./encide.png";

function NavComponent(){
    return(
        <>
        <div className={styles.navbar}>
            <div className={styles.logo}>ENCIDE
            </div>
            <div className={styles.home}>HOME</div>
            <div className={styles.about}>ABOUT</div>
            <div className={styles.team}>TEAM</div>
            <div className={styles.contact}>CONTACT</div>
            <div className={styles.events}><div className={styles.in_bord}>EVENTS</div></div>
        </div>
        
        <div className={styles.dropdown}>
            <p>▽</p>
            <button className={styles.dropbtn}></button>
            <div className={styles.drop_cont}>
                <a href="home">Home</a>
                <a href="about">About</a>
                <a href="team">Team</a>
                <a href="contact">Contact</a>
                <a href="Events">Events</a>
            </div>
            
        </div>
        </>
    );
}

export default NavComponent