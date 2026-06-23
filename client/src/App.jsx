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

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/transactions/${id}`
      );

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
  <div className="min-h-screen bg-green-50 p-6">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-2">
        💰 SpendWise
      </h1>

      <p className="text-center text-gray-600 mb-8">
        Track smart. Spend less. Save more.
      </p>

      <div className="bg-white rounded-xl shadow-md p-4 mb-8 border border-green-100">
        <p className="text-center text-green-700 font-medium">
          🌱 Every rupee saved today builds a better tomorrow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-green-100 p-5 rounded-xl shadow">
          <h3 className="text-gray-600">Total Income</h3>
          <p className="text-2xl font-bold text-green-700">
            ₹{totalIncome}
          </p>
        </div>

        <div className="bg-red-100 p-5 rounded-xl shadow">
          <h3 className="text-gray-600">Total Expense</h3>
          <p className="text-2xl font-bold text-red-700">
            ₹{totalExpense}
          </p>
        </div>

        <div className="bg-emerald-100 p-5 rounded-xl shadow">
          <h3 className="text-gray-600">Current Balance</h3>
          <p className="text-2xl font-bold text-emerald-700">
            ₹{balance}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4 text-green-700">
          Add Transaction
        </h2>

        <form
          onSubmit={addTransaction}
          className="grid md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg p-3"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded-lg p-3"
          />

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded-lg p-3"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg p-3"
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Add Transaction
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-green-700">
          Recent Transactions
        </h2>

        {transactions.length === 0 ? (
          <p className="text-gray-500">
            No transactions added yet.
          </p>
        ) : (
          transactions.map((transaction) => (
            <div
              key={transaction._id}
              className={`flex justify-between items-center p-4 mb-3 rounded-lg border-l-4 ${
                transaction.type === "income"
                  ? "border-green-500 bg-green-50"
                  : "border-red-500 bg-red-50"
              }`}
            >
              <div>
                <h3 className="font-semibold">
                  {transaction.title}
                </h3>

                <p className="text-sm text-gray-600">
                  {transaction.category}
                </p>

                <p className="text-sm">
                  ₹{transaction.amount} • {transaction.type}
                </p>
              </div>

              <button
                onClick={() =>
                  deleteTransaction(transaction._id)
                }
                className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);
}

export default App;