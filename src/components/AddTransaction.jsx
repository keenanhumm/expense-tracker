import React, { useState, useCallback } from "react";

export const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  const handleDescriptionChange = useCallback(
    (e) => setDescription(e.target.value),
    []
  );
  const handleAmountChange = useCallback((e) => setAmount(e.target.value), []);
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter description..."
            value={description}
            onChange={handleDescriptionChange}
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
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
