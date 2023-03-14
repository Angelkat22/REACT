import styles from "./Offer.module.css"

function Offer () {
    return (
        <div className={styles.offer}>
            <div className={styles.offer_point}>
                <h2 className={styles.offer_title}>Что мы предлагаем</h2>
                <p className={styles.offer_text}>В нашей мастерской можно выполнить комплексное техническое
                    обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя
                    проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем
                    качественно и с душой. </p>
            </div>
            <div className={styles.offer_img}>
                <img src="/images/offer.png" alt="bicycle_renovation"/>
            </div>
        </div>
    )
}

export default Offer