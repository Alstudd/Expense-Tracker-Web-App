import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Library imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layouts
import Main, { mainLoader } from "./layouts/Main";

// Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

// Actions
import { logoutAction } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: "/", // index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: logoutAction,
      }
    ],
  },
  // {
  //   path: "*",
  //   element: <Error />,
  // },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      <ToastContainer />
    </div>
  );
}

export default App