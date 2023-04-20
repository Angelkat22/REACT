import styles from './App.css'
import NavMenu from "./Components/NavMenu/NavMenu";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import RolePage from './pages/RolePage/RolePage';

function App() {
  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/users" element={<UsersPage />}/>
        <Route path="/users/:role" element={<RolePage />}/>

      </Routes>
    </div>
  );
}

export default App;
