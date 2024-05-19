import type { user } from '../../Users/types/userState';

export type authState = {
  user: user | undefined;
  error: string | undefined;
};

export type registrationState = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

export type authorizationState = Omit<registrationState, 'name' | 'lastName'>;
