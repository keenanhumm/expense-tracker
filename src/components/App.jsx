import React from "react";
import "../style/App.css";
import { Header } from "./Header";
import { Balance } from "./Balance";
import { BalanceSummary } from "./BalanceSummary";

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <BalanceSummary />
    </div>
  );
}

export default App;
