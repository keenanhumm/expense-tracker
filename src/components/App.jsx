import React from "react";
import "../style/App.css";
import { GlobalProvider } from "../context/GlobalContext";
import { Header } from "./Header";
import { Balance } from "./Balance";
import { BalanceSummary } from "./BalanceSummary";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <BalanceSummary />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
