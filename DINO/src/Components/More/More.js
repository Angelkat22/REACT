import styles from "./More.module.css"

function More () {
    return (
        <div className={styles.more}>
            <p className={styles.more_text}>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.</p>

            <p className={styles.more_text}>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
        </div>
    )
}

export default More