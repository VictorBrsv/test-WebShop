import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { cart } from './types/cartState';
import { deleteItemFromCart } from './CartSlice';
import styles from './styles/Cart.module.scss';

const Cart = () => {
  const cart: cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const backHandler = () => {
    navigate(-1);
  };

  const deleteItemHandler = (itemId: number) => {
    dispatch(deleteItemFromCart(itemId));
  };

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={backHandler}>
        Back
      </button>
      <ul>
        {cart.items && cart.items.length > 0 ? (
          cart.items.map((item) => (
            <ol key={item.id}>
              <h3 className={styles.title}>{item.title}</h3>
              <img src={item.image} alt={item.title} />
              <p className={styles.price}>Price: {item.price}</p>
              <button onClick={() => deleteItemHandler(item.id)}>Delete</button>
            </ol>
          ))
        ) : (
          <div>Your cart is empty...</div>
        )}
      </ul>
    </div>
  );
};

export default Cart;
