import styles from "./Rent.module.css"

function Rent() {
    return (
        <div className={styles.rent}>
            <div className={styles.rent_img}>
                <img src="/images/bicycle.png" alt="bicycle"/>
            </div>
            <div className={styles.rent_point}>
                <h2 className={styles.rent_title}>Прокат велосипедов</h2>
                <p className={styles.rent_text}>У нас вы можете взять на прокат хорошо обслуженные и настроенные
                    велосипеды. Как раз мы находимся в прекрасном парке!</p>
            </div>
        </div>
    )
}

export default Rent