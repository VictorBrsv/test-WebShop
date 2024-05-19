import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/store';
import { authorization } from './AuthSlice';
import styles from './styles/Authorization.module.scss';

export default function Authorization(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | undefined>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(authorization({ email, password }))
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
        <div className={styles.email}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name='email'
            type='email'
            className='form-control'
            aria-describedby='emailHelp'
            placeholder='e-mail'
          />
        </div>
        <div className={styles.password}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name='password'
            type='password'
            className='form-control'
            placeholder='password'
          />
        </div>
        {error && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}
        <button type='submit'>Войти</button>
      </form>
    </div>
  );
}
