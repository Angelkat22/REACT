import ServiceItem from "../ServiceItem/ServiceItem";
import styles from "./ServiceList.module.css"

function ServiceList() {
    return (
        <div className={styles.service_list}>
            <ServiceItem title = {"Годовое ТО"} color = {"#22356F"}/>
            <ServiceItem title = {"Выравнивание колес"} color ={"#0052C1"}/>
            <ServiceItem title = {"Настройка переключателей"} color ={"#76B58B"}/>
        </div>
    )
}

export default ServiceList