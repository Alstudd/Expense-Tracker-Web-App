// helper functions
import { useLoaderData } from "react-router-dom"
import { fetchData } from "../helpers"

// loader
export function dashboardLoader() {
    const userName = fetchData("userName") // const userName = "John"
    return { userName } // return { userName: "John" }
}

function Dashboard() {
    const { userName } = useLoaderData() // const { userName } = { userName: "John" }
    return (
        <div>
            <h1>{userName}</h1>
            Dashboard
        </div>
    )
}

export default Dashboard