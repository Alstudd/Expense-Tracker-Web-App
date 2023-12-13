// react-router-dom imports
import { Form, Link } from "react-router-dom";

// helper functions
import {
  formatCurrency,
  formatPercentage,
  totalSpentByBudget,
} from "../helpers";

// library imports
import {
  BanknotesIcon,
  BookmarkIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

function BudgetItem({ budget, showDelete = false }) {
  const { id, name, amount, color } = budget;
  const spent = totalSpentByBudget(id);
  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)}</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
      {showDelete ? (
        <div className="flex-md">
          <Form
            method="post"
            action="delete"
            onSubmit={(event) => {
              if (!confirm("Delete the budget and all its data?")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn">
              <span>Delete Budget</span>
              <TrashIcon width={20} />
            </button>
          </Form>
        </div>
      ) : (
        <div className="flex-md">
          <Link to={`/budget/${id}`} className="btn">
            <span>View Details</span>
            <BookmarkIcon width={20} />
            {/* <BanknotesIcon width={20} /> */}
          </Link>
        </div>
      )}
    </div>
  );
}

export default BudgetItem;
