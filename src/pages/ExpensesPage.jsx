// react-router-dom imports
import { useLoaderData } from "react-router-dom";

// helper functions
import { deleteData, fetchData } from "../helpers";

// components
import ExpensesTable from "../components/ExpensesTable";

// react-toastify
import { toast } from "react-toastify";

// loader
export async function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

// action
export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  if (_action === "deleteExpense") {
    try {
      deleteData({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success(`Expense deleted!`);
    } catch (e) {
      throw new Error("Error deleting budget!");
    }
  }
}

function ExpensesPage() {
  const { expenses } = useLoaderData;
  return (
    <div>
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="inner-hero">
          <h2>
            Recent Expenses<small>Total = {expenses.length}</small>
          </h2>
          <ExpensesTable expenses={expenses} />
        </div>
      ) : (
        <p>No expenses to show</p>
      )}
    </div>
  );
}

export default ExpensesPage;
