
import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { AuthInitialState, LoginThunkOutput } from "./authTypes";
import { loginUser, registerUser } from "./auth.operations";

const initialState: AuthInitialState = {
  userData: null,
 isLoggedIn: false,
    isLoading: false,
    isError: null,
    token: null,
    isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   
    },
    extraReducers: builder =>
      builder
        .addCase(loginUser.fulfilled, (state, { payload }:PayloadAction<LoginThunkOutput>) => {
          state.isLoading = false;
          state.userData = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          
        })
        .addCase(registerUser.fulfilled, (state, { payload }:PayloadAction<LoginThunkOutput>) => {
          state.isLoading = false;
          state.userData = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        })
        .addMatcher(
          isAnyOf(loginUser.pending, registerUser.pending),
          state => {
            state.isLoading = true;
            state.isError = null;
          }
        )
        .addMatcher(
          isAnyOf(loginUser.rejected, registerUser.rejected),
          (state) => {
            state.isLoading = false;
            state.isError = true;
          }
        ),
});



export const authReducer = authSlice.reducer;
