import React, { useContext, useCallback } from "react";
import { formatMoney } from "../utils";
import { GlobalContext } from "../context/GlobalContext";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const isDebit = transaction.amount < 0;

  const handleDeleteTransaction = useCallback(
    () => deleteTransaction(transaction.id),
    [deleteTransaction, transaction.id]
  );

  return (
    <li className={isDebit ? "minus" : "plus"}>
      {transaction.description} <span>{formatMoney(transaction.amount)}</span>
      <button className="delete-btn" onClick={handleDeleteTransaction}>
        x
      </button>
    </li>
  );
};
