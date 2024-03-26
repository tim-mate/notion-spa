import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./ui/App";
import { Login } from "@/pages/login";
import { Signup } from "@/pages/signup";
import { Workspace } from "@/pages/workspace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: (
          <Suspense fallback={"Loading..."}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={"Loading..."}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "/workspace",
        element: (
          <Suspense fallback={"Loading..."}>
            <Workspace />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
