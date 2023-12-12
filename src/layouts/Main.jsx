// helper functions
import { fetchData } from "../helpers"

// react-router-dom imports
import { Outlet, useLoaderData } from "react-router-dom"

// assets
import wave from "../assets/wave.svg"

// components
import Navbar from "../components/Navbar"

// loader functions
export function mainLoader() {
    const userName = fetchData("userName") // const userName = "John"
    return { userName } // return { userName: "John" }
}

function Main() {
    const { userName } = useLoaderData() // const { userName } = { userName: "John" }
    return (
        <div className="layout">
            <Navbar userName={userName} />
            <main>
                <Outlet />
            </main>
            <img src={wave} alt="wave" />
        </div>
    )
}

export default Main