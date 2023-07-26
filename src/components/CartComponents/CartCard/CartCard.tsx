import React from 'react';
import {Card, Image, Button, Badge} from "react-bootstrap";
// @ts-ignore
import styles from "./CartCard.module.scss"

interface CartCardProps{
    id:number,
    title:string,
    price:string,
    image:string,
    onClick: (id:number) => void
}

const CartCard:React.FC<CartCardProps> = ({title, price, image, onClick, id}) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body className={styles.cardInfo}>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><Badge bg="success">{price}$</Badge></Card.Subtitle>
                <div className={styles.imageContainer}>
                    <Image className={styles.image} src={image}/>
                </div>
                <Button onClick = {() => {onClick(id)}} variant="outline-danger">Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default CartCard;