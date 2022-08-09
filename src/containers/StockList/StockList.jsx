import { useState, useEffect } from "react";
import StockCard from "../../components/StockCard/StockCard";
import { getStock } from "../../services/stock";
function StockList() {
    const [stock, setStock] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const stock = await getStock();
            setStock(stock);
        };

        wrapper();
    }, []);
    return (
        <>
            {stock.map((stock) => (
                <StockCard key={stock.id} stock={stock} />
            ))}
        </>
    );
}

export default StockList;
