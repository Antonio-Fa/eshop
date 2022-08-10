import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getStockById } from "../../services/stock";
import styles from "./StockPage.module.scss";

function StockPage(key) {
    const [stock, setStock] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getStockById(key)
            .then(setStock)
            .finally(() => setLoading(false));
    }, [key]);

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className={styles.Product}>
                    <h1>{stock.name}</h1>
                    <img
                        className={styles.Product_Img}
                        src={stock.imageUrl}
                        alt={stock.name}
                    ></img>
                    <h2>${stock.price}</h2>
                    <h3>Left in stock: {stock.quantity}</h3>
                    <h4 className={styles.Product_Desc}>Description</h4>
                    <p className={styles.Product_Desc_Para}>{stock.desc}</p>
                </div>
            )}
        </>
    );
}

export default StockPage;
