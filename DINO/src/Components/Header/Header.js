import Nav from "../Navpanel/navpanel";
import styles from "./Header.module.css"

function Header() {
    return (
        <div className={styles.header_logo}>
            <img src="/images/logo.png" alt="logo"/>
            <Nav/>
            <button className={styles.header_btn}>Связаться</button>
        </div>
    )
}

export default Header