import { User } from './types';

export const SET_USER = '@session/SET_USER';

export const setUSER = (user: User) => ({ type: SET_USER, payload: user });
