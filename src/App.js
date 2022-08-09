import "./App.css";
import styles from "./global.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import StockList from "./containers/StockList/StockList";
import StockPage from "./containers/StockPage/StockPage";
import Nav from "./components/Nav/Nav";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div class="Home">
                            <h1>Board Game Store</h1>
                            <div class="Home_grid">
                                <StockList />
                            </div>
                        </div>
                    }
                ></Route>
                <Route path="/products/:id" element={<StockPage />}></Route>
                <Route path="/products/" element={<h1>Products</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
