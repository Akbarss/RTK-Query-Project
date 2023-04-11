import { Navigate, useRoutes } from "react-router-dom";
import HomePage from "../page";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [{ path: "/", element: <HomePage users={[]} /> }],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
