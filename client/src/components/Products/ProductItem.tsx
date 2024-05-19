import React from 'react';
import { setCart } from '../Cart/CartSlice';
import { product } from './types/productState';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from '../Products/styles/ProductItem.module.scss';

const ProductItem = (product: product) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productId = product.id;

  const onDetails = () => {
    navigate(`/products/${productId}`);
  };

  const addToCart = () => {
    dispatch(setCart([product]));
  };

  return (
    <div className={styles.container}>
      <ol className={styles.item}>
        <div className={styles.title}>{product.title}</div>
        <br />
        <div className={styles.image}>
          <img src={product.image} alt='img' />
        </div>
        <br />
        <div className={styles.price}>price: {product.price}</div>
        <br />
        <div className={styles.buttons}>
          <button onClick={onDetails}>Details</button>
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </ol>
    </div>
  );
};

export default ProductItem;
