import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { product } from '../Products/types/productState';
import { RootState } from '../../store/store';
import { setDetails } from './DetailsSlice';
import styles from './styles/Details.module.scss';

const Details = () => {
  const details: product = useSelector((state: RootState) => state.details);
  const dispatch = useDispatch();
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  const onBackHandler = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (productId) {
      fetch(`https://fakestoreapi.com/products/${productId}`)
        .then((res) => res.json())
        .then((json) => dispatch(setDetails(json)))
        .catch((error) => console.error(error));
    }
  }, [productId]);

  return details ? (
    <div className={styles.container}>
      <div className={styles.title}>{details.title}</div>
      <div className={styles.description}>{details.description}</div>
      <img src={details.image} />
      <div className={styles.others}>
        Price: {details.price}
        <br />
        Rate: {details.rating.rate}
        <br />
        Count: {details.rating.count}
        <br />
        Category: {details.category}
      </div>
      <button onClick={onBackHandler}>Back</button>
    </div>
  ) : (
    <div>...Loading</div>
  );
};

export default Details;
