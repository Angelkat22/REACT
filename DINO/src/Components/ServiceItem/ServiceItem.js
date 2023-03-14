import styles from "./ServiceItem.module.css"

function ServiceItem(props){
    return(
        <div className={styles.serviceItem} style={{backgroundColor : `${props.color}`}}>
            <h2 className={styles.serviceItem_title}>{props.title}</h2>
        </div>
    )
}

export default ServiceItem