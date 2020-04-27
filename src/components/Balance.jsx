import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { formatMoney } from "../utils";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const currentBalance = transactions.reduce(
    (acc, { amount }) => acc + amount,
    0
  );

  return (
    <>
      <h4>Current balance</h4>
      <h1 id="balance">{formatMoney(currentBalance)}</h1>
    </>
  );
};
