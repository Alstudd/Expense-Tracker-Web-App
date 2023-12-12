// react-router-dom imports
import { useLoaderData } from "react-router-dom"

// helper functions
import { createBudget, createExpense, fetchData, waitTime } from "../helpers"

// components
import Hero from "../components/Hero"
import AddBudgetForm from "../components/AddBudgetForm"
import AddExpenseForm from "../components/AddExpenseForm"

// react-toastify
import { toast } from "react-toastify"

// loader
export function dashboardLoader() {
    const userName = fetchData("userName") // const userName = "John"
    const budgets = fetchData("budgets")
    return { userName, budgets } // return { userName: "John" }
}

// actions
export async function dashboardAction({ request }) {
    await waitTime()
    const data = await request.formData();
    // console.log({ data, request })
    // const userName = data.get("userName")
    // const formdata = Object.fromEntries(data)

    const { _action, ...values } = Object.fromEntries(data)
    if (_action === "newUser") {
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName))
            return toast.success(`Welcome ${values.userName}!`)
        } catch (e) {
            throw new Error("Error creating user!")
        }
    }
    if (_action === "createBudget") {
        try {
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount
            })
            return toast.success(`Budget ${values.newBudget} created!`)
        } catch (e) {
            throw new Error("Error creating budget!")
        }
    }
    if (_action === "createExpense") {
        try {
            createExpense({
                name: values.newExpense,
                amount: values.newExpenseAmount,
                budgetId: values.newExpenseBudget
            })
            return toast.success(`Expense ${values.newExpense} created!`)
        } catch (e) {
            throw new Error("Error creating expense!")
        }
    }
}


function Dashboard() {
    const { userName, budgets } = useLoaderData() // const { userName } = { userName: "John" }
    return (
        <>
            {userName ? (
                <div className="inner-hero">
                    <h1>Welcome, <span>{userName}</span></h1>
                    <div className="grid-sm">
                        {
                            budgets && budgets.length > 0 ? (
                                <div className="inner-hero">
                                    <AddBudgetForm />
                                    <AddExpenseForm budgets={budgets} />
                                </div>
                            ) : (
                                <div className="inner-hero">
                                    <p>Create a budget to get started!</p>
                                    <AddBudgetForm />
                                </div>
                            )
                        }
                    </div>
                </div>
            ) : <Hero />}
        </>
    )
}

export default Dashboard