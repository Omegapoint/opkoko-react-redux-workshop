import { getUsers } from '../api';

export const GET_USERS = "GET_USERS";
export const GET_USERS_ERROR = "GET_USERS";

export const getAllUsers = () => {
    return dispatch => {
        getUsers()
        .then((users) => {
            // TODO: Task 3 - Dispatch asych action. getUsers is a function from out api that returns a promise. 
        })
        .catch((e) => {
            dispatch({
                type: GET_USERS_ERROR,
                payload: {
                    error: e
                }
            });
        })
    };
};