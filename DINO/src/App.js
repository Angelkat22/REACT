import styles from './App.module.css';
import Header from './Components/Header/Header';
import Info from './Components/Info/Info';
import More from './Components/More/More';
import ServiceList from './Components/ServiceList/ServiceList';
import Offer from './Components/UsualOffer/Offer';
import Rent from './Components/Rent/Rent';

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <Info />
            <Offer />
            <More />
            <ServiceList />
            <Rent />
      
        </div>
    );
}

export default App;