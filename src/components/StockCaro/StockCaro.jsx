import { useState, useEffect } from "react";
import StockCard from "../../components/StockCard/StockCard";
import { getStock } from "../../services/stock";
import Slider from "react-slick";

function StockCaro() {
    const [stock, setStock] = useState([]);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        const wrapper = async () => {
            const stock = await getStock();
            setStock(stock);
        };

        wrapper();
    }, []);

    console.log(stock);
    return (
        <div>
            <Slider {...settings}>
                {stock.map((stock) => (
                    <div>
                        <StockCard key={stock.id} stock={stock} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default StockCaro;
