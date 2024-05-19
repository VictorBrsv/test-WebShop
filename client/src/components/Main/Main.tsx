import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/Main.module.scss';

const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.registration}>
          <NavLink to='registration'>Registration</NavLink>
        </div>
        <div className={styles.login}>
          <NavLink to='login'>Login</NavLink>
        </div>
      </div>
      <div className={styles.welcome}>
        <h1>WELCOME!</h1>
      </div>
    </>
  );
};

export default Main;
