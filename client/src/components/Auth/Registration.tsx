import React, { useState } from 'react';
import { useAppDispatch } from '../../store/store';
import { registration } from './AuthSlice';
import { useNavigate } from 'react-router-dom';
import styles from './styles/Registration.module.scss';

export default function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | undefined>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(registration({ name, lastName, email, password }))
      .then((data) => {
        if ('error' in data) {
          setError(data.error.message);
          return;
        }
        interface User {
          id: number | undefined;
          name: string;
        }
        const user: User = { id: data.payload.id, name: data.payload.name };
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/products');
      })
      .catch((error) => {
        console.log(error);
        setError('Произошла ошибка при авторизации');
      });
  };

  return (
    <div className={styles.container}>
      <form id='reg-form' onSubmit={onHandleSubmit}>
        <div className={styles.name}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name='name'
            type='text'
            placeholder='name'
          />
        </div>
        <div className={styles.lastName}>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name='lastName'
            type='text'
            placeholder='last name'
          />
        </div>
        <div className={styles.email}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name='email'
            type='email'
            placeholder='e-mail'
          />
        </div>
        <div className={styles.password}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name='password'
            type='password'
            placeholder='password'
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type='submit'>Registration</button>
      </form>
    </div>
  );
}
