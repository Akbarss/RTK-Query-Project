import { Navigate, useRoutes } from "react-router-dom";
import HomePage from "../page";
import UserPage from "../page/user";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/users", element: <UserPage /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
