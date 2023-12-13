// react-router-dom imports
import { Link } from "react-router-dom";
import { Form, useFetcher } from "react-router-dom";

// react imports
import { useEffect, useRef } from "react";

// helper functions
import {
  formatCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from "../helpers";

import { TrashIcon } from "@heroicons/react/24/solid";

function ExpenseItem({ expense, showBudget }) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();
  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset();
      // reset focus
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
      <td>
        {showBudget && (
          <Link
            to={`/budget/${budget.id}`}
            style={{ "--accent": budget.color }}
          >
            {budget.name}
          </Link>
        )}
      </td>
      <td>
        <fetcher.Form method="post">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="expenseId" value={expense.id} />
          <button
            type="submit"
            className="btn"
            aria-label={`Delete ${expense.name} expense`}
          >
            <TrashIcon width={20} height={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  );
}

export default ExpenseItem;
