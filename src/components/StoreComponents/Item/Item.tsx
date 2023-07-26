import React from 'react';
import {Card, Button, Accordion, Badge} from "react-bootstrap";
// @ts-ignore
import styles from "./Item.module.scss"

interface ItemProps {
    id: number,
    title: string,
    description: string,
    image: string,
    onClick: (id:number) => void,
    price: string
}

const Item: React.FC<ItemProps> = ({title, description, image, onClick, id, price}) => {

    return (
        <Card className={styles.card} style={{width: '18rem'}}>
            <Card.Img className = {styles.image} variant="top" src={image}/>
            <Card.Body className={styles.cardInfo}>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><Badge bg="success">{price}$</Badge></Card.Subtitle>
                <Accordion className = {styles.description}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Description</Accordion.Header>
                        <Accordion.Body>
                            {description}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Card.Text>
                    text
                </Card.Text>
                <Button onClick = {() => {onClick(id)}} className={styles.button} variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    );
};

export default Item;