import React, { useState, useContext, useCallback } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleDescriptionChange = useCallback(
    (e) => setDescription(e.target.value),
    []
  );
  const handleAmountChange = useCallback((e) => setAmount(e.target.value), []);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      addTransaction(description, amount);
      setAmount(0);
      setDescription("");
    },
    [addTransaction, amount, description]
  );

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter description..."
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};
