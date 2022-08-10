import Carousel from "better-react-carousel";
import { useState, useEffect } from "react";
import StockCard from "../../components/StockCard/StockCard";
import { getStock } from "../../services/stock";
import styles from "./CarouselPage.module.scss";

function CarouselPage() {
    const [stock, setStock] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const wrapper = async () => {
            const stock = await getStock();
            setStock(stock);
            console.log(stock);
        };

        wrapper();
    }, []);

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${stock[currentIndex].imageUrl})`,
                }}
            ></div>
        </div>
    );
}

export default CarouselPage;
