import { v4 as uuidv4 } from "uuid";
export const INITIAL_TRANSACTIONS = [
  {
    id: uuidv4(),
    amount: 100,
    description: "Payroll",
  },
  {
    id: uuidv4(),
    amount: -1,
    description: "Snickers",
  },
  {
    id: uuidv4(),
    amount: -3,
    description: "Shoelaces",
  },
  {
    id: uuidv4(),
    amount: -6,
    description: "Coffee",
  },
  {
    id: uuidv4(),
    amount: -19,
    description: "Tie",
  },
];
