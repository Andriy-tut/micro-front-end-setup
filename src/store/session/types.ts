import { Action } from 'redux';

export interface User {
    id: string;
    name: string;
}

export interface SetUserAction extends Action {
    payload: User;
} 

export type Actions = Action | SetUserAction;

export interface SessionState {
    user: User|null;
}
