// react-router-dom imports
import { redirect } from "react-router-dom";

// helper functions
import { deleteData } from "../helpers";

// library imports
import { toast } from "react-toastify";

export async function logoutAction() {
    deleteData({
        key: "userName"
    })
    toast.success("Account deleted successfully!")
    return redirect("/")
}