import { DELETE_TRANSACTION, ADD_TRANSACTION } from "./types";
import { v4 as uuidv4 } from "uuid";

export const AppReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [
          {
            ...payload,
            id: uuidv4(),
          },
          ...state.transactions,
        ],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};
