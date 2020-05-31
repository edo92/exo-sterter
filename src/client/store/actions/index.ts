import { request } from "graphql-request";
import { SET_USER } from '../types';

export const authAction = (user?: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch({ type: SET_USER, payload: 'user' });
  }
};

export const createUser = (form: any) => {
  return async (dispatch: any, getState: any) => {
    // User object
    const { email, fullName, username, password } = form;

    try {
      let res = await request(
        "/graphql",
        `mutation {
          createUser(email: "${email}",
          fullName: "${fullName}",
          username: "${username}",
          password: "${password}" ) 
        {
          fullName
        }
      }`
      );
    } catch (error) { throw error }
  }
};

export const authUser = (form: any) => {
  return async (dispatch: any, getState: any) => {
    // Sign in object
    const { email, password } = form;

    try {
      let res = await request(
        "/graphql",
        `mutation {
        authUser(email: "${email}", password: "${password}") {
          username
        }
      }`
      );
    } catch (error) { throw error }
  }
};