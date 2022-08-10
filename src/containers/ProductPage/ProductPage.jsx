import { useState, useEffect } from "react";
import StockCard from "../../components/StockCard/StockCard";
import { getStock, toggleFave } from "../../services/stock";

function ProductPage() {
    const [stock, setStock] = useState([]);
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        const wrapper = async () => {
            const stock = await getStock();
            setStock(stock);
        };

        wrapper();
    }, [clicks]);

    const onWatchButton = async (id, fave) => {
        await toggleFave(id, fave);
        setClicks(clicks + 1);
    };

    return (
        <>
            {stock.map((stock) => (
                <StockCard
                    key={stock.id}
                    stock={stock}
                    onWatchButton={onWatchButton}
                />
            ))}
        </>
    );
}

export default ProductPage;
