import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/shared/types";

type Token = string;

interface AuthState {
  user: User | null;
  token: Token | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
