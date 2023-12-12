// react-router-dom imports
import { redirect } from "react-router-dom";

// helper functions
import { deleteData } from "../helpers";

export async function logoutAction() {
    deleteData({
        key: "userName"
    })
    return redirect("/")
}