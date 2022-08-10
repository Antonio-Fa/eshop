import Carousel from "better-react-carousel";
import { useState, useEffect } from "react";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import StockCard from "../../components/StockCard/StockCard";
import { getStock } from "../../services/stock";
import styles from "./CarouselPage.module.scss";

function CarouselPage() {
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getStock(stock)
            .then(setStock)
            .finally(() => setLoading(false));
    }, [stock]);

    // console.log(stock);
    let stockOne = stock[0];
    let stockTwo = stock[1];
    let stockThree = stock[2];

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className={styles.Carousel}>
                    <Carousel cols={1} rows={1} loop autoplay={3000}>
                        <Carousel.Item>
                            <CarouselCard key={stockOne.id} stock={stockOne} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CarouselCard key={stockTwo.id} stock={stockTwo} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <CarouselCard
                                key={stockThree.id}
                                stock={stockThree}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            )}
        </>
    );
}

export default CarouselPage;
