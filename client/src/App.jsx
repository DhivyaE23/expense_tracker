import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [transactions, setTransactions] = useState([]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/transactions"
        );

        setTransactions(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTransactions();
  }, []);

  const addTransaction = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/transactions", {
        title,
        amount,
        type,
        category,
      });

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const totalIncome = transactions
  .filter((t) => t.type === "income")
  .reduce((acc, curr) => acc + curr.amount, 0);

const totalExpense = transactions
  .filter((t) => t.type === "expense")
  .reduce((acc, curr) => acc + curr.amount, 0);

const balance = totalIncome - totalExpense;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Expense Tracker</h1>
      <h2>Balance: ₹{balance}</h2>
<h3>Total Income: ₹{totalIncome}</h3>
<h3>Total Expense: ₹{totalExpense}</h3>

      <form onSubmit={addTransaction}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <br />
        <br />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <br />
        <br />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Add Transaction</button>
      </form>

      <hr />

      <h2>Transactions</h2>

      {transactions.map((transaction) => (
        <div key={transaction._id}>
          <p>
            <strong>{transaction.title}</strong> - ₹{transaction.amount} (
            {transaction.type})
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;