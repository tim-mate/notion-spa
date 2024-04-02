import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/shared/types";
import { notionApi } from "@/shared/api";

type Token = string;

interface AuthState {
  user: User | null;
  token: Token | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjgwNzFhMDlhYmRjZTU1NjE4ZDg3ZSIsImlhdCI6MTcxMDc1NjgxNSwiZXhwIjoxNzEzMzQ4ODE1fQ.3WIWy1YGrtEZn_NWy_cZrqr57RJhvKWL5q6eZWeFwcM",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      notionApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
      }
    );
    builder.addMatcher(
      notionApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      notionApi.endpoints.refresh.matchFulfilled,
      (state, { payload }) => {
        state.user = payload.user;
      }
    );
    builder.addMatcher(notionApi.endpoints.logout.matchFulfilled, (state) => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
    });
  },
});

export const authReducer = authSlice.reducer;
