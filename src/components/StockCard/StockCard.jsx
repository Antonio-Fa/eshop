import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./StockCard.module.scss";

function StockCard(props) {
    const { stock, onWatchButton } = props;

    return (
        <div key={stock.id} className={styles.Card}>
            <h2 className={styles.Card_Name}>{stock.name}</h2>
            <img
                className={styles.Card_Img}
                src={stock.imageUrl}
                alt={stock.name}
            />
            <h3 className={styles.Card_Price}>${stock.price}</h3>

            <p className={styles.Card_Stock}>Left in stock: {stock.quantity}</p>
            <p>
                Favourite - {stock.faveDisplay}
                {""}
                <button onClick={() => onWatchButton(stock.id, stock.fave)}>
                    Fave
                </button>
            </p>

            <NavLink className={styles.Card_Link} to={`/products/${stock.id}`}>
                Product Info
            </NavLink>
        </div>
    );
}

export default StockCard;
