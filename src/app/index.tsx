import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./model";
import { App } from "./ui";
import { Signup } from "@/pages/signup";
import { Login } from "@/pages/login";
import { Workspace } from "@/pages/workspace";
import { ErrorPage } from "@/pages/error";

import "./styles/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/signup",
        element: (
          <Suspense fallback={"Loading..."}>
            <Signup />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={"Loading..."}>
            <Login />
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
        children: [
          {
            path: ":currentPageId",
            element: <p>Current page</p>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
