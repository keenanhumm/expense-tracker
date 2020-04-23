import React from "react";
import { formatMoney } from "../utils";

export const IncomeTotal = () => {
  return (
    <div>
      <h4>Income</h4>
      <p id="money-plus" className="money plus">
        {formatMoney(0)}
      </p>
    </div>
  );
};
