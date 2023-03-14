import styles from './navpanel.module.css'

function Nav() {
    return (
        <ul className={styles.menu}>
            <li className={styles.menu_item}><a href="#">О нас</a></li>
            <li className={styles.menu_item}><a href="#">Услуги</a></li>
            <li className={styles.menu_item}><a href="#">Аренда</a></li>
        </ul>
    )
}

export default Nav