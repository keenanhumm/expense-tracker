import React, { useContext } from "react";
import { formatMoney } from "../utils";
import { GlobalContext } from "../context/GlobalContext";

export const IncomeTotal = () => {
  const { transactions } = useContext(GlobalContext);
  const totalIncome = transactions
    .filter(({ amount }) => amount > 0)
    .reduce((acc, { amount }) => acc + amount, 0);

  return (
    <div>
      <h4>Income</h4>
      <p id="money-plus" className="money plus">
        {formatMoney(totalIncome)}
      </p>
    </div>
  );
};
