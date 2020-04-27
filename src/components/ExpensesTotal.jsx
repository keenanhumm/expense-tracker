import React, { useContext } from "react";
import { formatMoney } from "../utils";
import { GlobalContext } from "../context/GlobalContext";

export const ExpensesTotal = () => {
  const { transactions } = useContext(GlobalContext);
  const totalExpenses = Math.abs(
    transactions
      .filter(({ amount }) => amount < 0)
      .reduce((acc, { amount }) => acc + amount, 0)
  );

  return (
    <div>
      <h4>Expenses</h4>
      <p id="money-minus" className="money minus">
        {formatMoney(totalExpenses)}
      </p>
    </div>
  );
};
