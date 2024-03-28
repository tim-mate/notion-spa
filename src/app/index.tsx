import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./model";
import { App } from "./ui";
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
