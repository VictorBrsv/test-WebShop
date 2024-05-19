import axios from 'axios';
import type { user } from '../components/Users/types/userState';
import {
  registrationState,
  authorizationState,
} from '../components/Auth/types/AuthState';

export const authRegistration = async (
  value: registrationState
): Promise<user> => {
  const { data }: { data: user } = await axios.post('/api/auth/signup', {
    data: value,
  });
  if (!data.message) {
    return data;
  }
  throw new Error(data.message);
};

export const authorization = async (
  value: authorizationState
): Promise<user> => {
  const { data }: { data: user } = await axios.post('/api/auth/login', {
    data: value,
  });
  if (!data.message) {
    return data;
  }
  throw new Error(data.message);
};
