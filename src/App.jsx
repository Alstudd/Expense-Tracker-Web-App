import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Layouts
import Main, { mainLoader } from "./layouts/Main";

// Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

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
        errorElement: <Error />,
      },
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
    </div>
  );
}

export default App