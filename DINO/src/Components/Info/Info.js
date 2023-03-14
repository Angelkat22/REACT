import styles from "./Info.module.css"

function Info () {
    return (
        <div className={styles.info}>
            <div className={styles.info_point}>
                <h1 className={styles.info_title}>Веломастерская “Велозар”</h1>
                <p className={styles.info_text}>Мы, мастера веломастерской ''Велозар'', как раз те самые счастливые
                    люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим, чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <div>
                <img src="/images/dino.png" alt="dinosaur"/>
            </div>
        </div>
    )
}

export default Info