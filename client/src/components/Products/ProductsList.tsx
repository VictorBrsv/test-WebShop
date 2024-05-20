import React, { useEffect } from 'react';
import ProductItem from './ProductItem';
import type { product } from './types/productState';
import { useNavigate } from 'react-router-dom';
import { setProducts } from '../Products/ProductSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './styles/ProductList.module.scss';

const ProductsList = () => {
  const products: product[] = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => dispatch(setProducts(json)));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getCart = () => {
    navigate('/cart');
  };

  return (
    <div className={styles.container}>
      <div className={styles.cart} onClick={getCart}>
        <img src='../../../public/cart.png' />
      </div>
      <div className={styles.product}>
        {products && products.length > 0 ? (
          products.map((product: product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              description={product.description}
              image={product.image}
              rating={{
                rate: product.rating.rate,
                count: product.rating.count,
              }}
            />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
