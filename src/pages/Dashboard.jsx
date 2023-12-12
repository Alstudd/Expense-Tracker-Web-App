// helper functions
import { useLoaderData } from "react-router-dom"
import { fetchData } from "../helpers"

// components
import Hero from "../components/Hero"

// loader
export function dashboardLoader() {
    const userName = fetchData("userName") // const userName = "John"
    return { userName } // return { userName: "John" }
}

function Dashboard() {
    const { userName } = useLoaderData() // const { userName } = { userName: "John" }
    return (
        <>
            {userName ? (<p>{userName}</p>) : <Hero />}
        </>
    )
}

export default Dashboard