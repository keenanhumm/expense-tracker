import React from "react";
import { formatMoney } from "../utils";

export const ExpensesTotal = () => {
  return (
    <div>
      <h4>Expenses</h4>
      <p id="money-minus" className="money minus">
        {formatMoney(0)}
      </p>
    </div>
  );
};
