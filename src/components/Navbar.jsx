// react-router-dom imports
import { Form, NavLink } from "react-router-dom";

// library imports
import { TrashIcon } from "@heroicons/react/24/solid";

// assets
import logomark from "../assets/logomark.svg";

function Navbar({ userName }) {
  return (
    <nav>
      <NavLink to="/" aria-label="home">
        <img src={logomark} alt="logomark" height={30} />
        <span>Financify</span>
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm("Delete User and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit">
            <span>Delete User</span>
            <TrashIcon width={20} height={20} />
          </button>
        </Form>
      )}
    </nav>
  );
}

export default Navbar;
