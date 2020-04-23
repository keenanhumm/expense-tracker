import React, { createContext, useReducer } from "react";
import { INITIAL_TRANSACTIONS } from "../constants";
import { AppReducer } from "./AppReducer";

const INITIAL_STATE = {
  transactions: INITIAL_TRANSACTIONS,
};

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobalProvider = ({ children }) => {
  const [state] = useReducer(AppReducer, INITIAL_STATE);

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};
