// helper functions
import { useLoaderData } from "react-router-dom"
import { fetchData } from "../helpers"

// components
import Hero from "../components/Hero"

// react-toastify
import { toast } from "react-toastify"

// loader
export function dashboardLoader() {
    const userName = fetchData("userName") // const userName = "John"
    return { userName } // return { userName: "John" }
}

// actions
export async function dashboardAction({ request }) {
    const data = await request.formData();
    // console.log({ data, request })
    // const userName = data.get("userName")
    const formdata = Object.fromEntries(data)
    try {
        localStorage.setItem("userName", JSON.stringify(formdata.userName))
        return toast.success(`Welcome ${formdata.userName}!`)
    } catch (e) {
        throw new Error("Error creating user!")
    }
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