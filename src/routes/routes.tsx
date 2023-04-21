import { Navigate, useRoutes } from "react-router-dom";
import HomePage from "../page";
import UserPage from "../page/user";
import NewAdd from "../page/new";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/users", element: <UserPage /> },
        { path: "/new", element: <NewAdd /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
