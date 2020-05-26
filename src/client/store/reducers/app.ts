import { SET_USER } from "../types";// action types
import { IState } from './inf'; // interface

const initialState: IState = {
  user: {},
};

const app = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload
      };
    }

    default:
      return state;
  }
};

export default app;
