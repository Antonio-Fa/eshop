import styles from "./CarouselCard.module.scss";

function CarouselCard(props) {
    const { stock } = props;

    return (
        <div className={styles.Product}>
            <h1>{stock.name}</h1>
            <img
                className={styles.Product_Img}
                src={stock.imageUrl}
                alt={stock.name}
            ></img>
        </div>
    );
}

export default CarouselCard;
