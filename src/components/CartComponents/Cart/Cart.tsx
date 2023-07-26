import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import CartCard from "../CartCard/CartCard";
// @ts-ignore
import styles from "./Cart.module.scss"
import {deleteCart} from "../../../store/cart";

const Cart: React.FC = () => {

    const cart = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    function handleDeleteItem(id: number) {
        dispatch(deleteCart(id))
    }

    return (
        <div className={styles.container}>
            {
                cart.items.length !== 0
                    ?
                    cart.items.map((el) => {
                        return (
                            <CartCard onClick={handleDeleteItem} id={el.id} key={el.id} title={el.title}
                                      price={el.price} image={el.image}/>
                        )
                    })
                    : <h2 className={styles.cartNotification}>Cart is empty!</h2>
            }
        </div>
    );
};

export default Cart;