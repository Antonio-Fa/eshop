import "./App.css";
import styles from "./global.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import StockPage from "./containers/StockPage/StockPage";
import Nav from "./components/Nav/Nav";
import ProductPage from "./containers/ProductPage/ProductPage";
import Carousel from "./containers/Carousel/Carousel";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <h1>Board Game Store</h1>
                            <p>This will contain carousel</p>
                            <div>{/* <Carousel /> */}</div>
                        </div>
                    }
                ></Route>
                <Route path="/products/:id" element={<StockPage />}></Route>
                <Route
                    path="/products/"
                    element={
                        <div className="Products">
                            <h1>Products</h1>
                            <div className="Products_grid">
                                <ProductPage />
                            </div>
                        </div>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
