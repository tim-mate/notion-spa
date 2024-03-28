import { configureStore } from "@reduxjs/toolkit";

import { notionApi } from "@/shared/api";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    [notionApi.reducerPath]: notionApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notionApi.middleware),
});
