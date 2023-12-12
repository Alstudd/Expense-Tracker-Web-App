// react-router-dom imports
import { useLoaderData } from "react-router-dom"

// helper functions
import { createBudget, fetchData, waitTime } from "../helpers"

// components
import Hero from "../components/Hero"
import AddBudgetForm from "../components/AddBudgetForm"

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

    const {_action, ...values} = Object.fromEntries(data)
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
}


function Dashboard() {
    const { userName, budgets } = useLoaderData() // const { userName } = { userName: "John" }
    return (
        <>
            {userName ? (
                <div className="inner-hero">
                    <h1>Welcome, <span>{userName}</span></h1>
                    <div className="grid-sm">
                        {/* {budgets ? () : ()} */}
                        <div className="grid-lg">
                            <div className="flex-lg">
                                <AddBudgetForm />
                            </div>
                        </div>
                    </div>
                </div>
            ) : <Hero />}
        </>
    )
}

export default Dashboard