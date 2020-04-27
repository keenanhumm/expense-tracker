import React, { createContext, useReducer } from "react";
import { INITIAL_TRANSACTIONS } from "../constants";
import { AppReducer } from "./AppReducer";
import { DELETE_TRANSACTION, ADD_TRANSACTION } from "./types";

const INITIAL_STATE = {
  transactions: INITIAL_TRANSACTIONS,
};

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  // ACTIONS
  const deleteTransaction = (id) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
    });
  };
  const addTransaction = (description, amount) => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: {
        description,
        amount: Number(amount),
      },
    });
  };

  const contextValue = {
    ...state,
    addTransaction,
    deleteTransaction,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
