import React from "react";
import { IncomeTotal } from "./IncomeTotal";
import { ExpensesTotal } from "./ExpensesTotal";

export const BalanceSummary = () => {
  return (
    <div className="inc-exp-container">
      <IncomeTotal />
      <ExpensesTotal />
    </div>
  );
};
