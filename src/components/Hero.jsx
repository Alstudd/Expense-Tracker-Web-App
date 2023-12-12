import { Form } from "react-router-dom"

// library imports
import { UserPlusIcon } from "@heroicons/react/24/solid"

// assets
import illustration from "../assets/illustration2.svg"

function Hero() {
  return (
    <div className="hero">
        <div className="inner-hero">
            <h1>
                Track Your Expenses With <br/><span>Your BudgetBuddy</span>
            </h1>
            <p>
                Personal budgeting and expense tracking made simple.<br/>
                Start your journey to financial wellness today.
            </p>
            <Form method="post">
                <input type="text" name="userName" placeholder="Enter your name" aria-label="Your Name" autoComplete="given-name" required />
                <button type="submit">
                    <span>Get Started</span>
                    <UserPlusIcon width={20} height={20} />
                </button>
            </Form>
        </div>
        <img src={illustration} alt="hero" width={500} />
    </div>
  )
}

export default Hero