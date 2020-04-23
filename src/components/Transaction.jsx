import React from "react";
import { formatMoney } from "../utils";

export const Transaction = ({ transaction }) => {
  return (
    <li className="minus">
      {transaction.description} <span>{formatMoney(transaction.amount)}</span>
      <button className="delete-btn">x</button>
    </li>
  );
};
