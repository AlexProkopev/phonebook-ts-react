import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { AuthInitialState, LoginThunkOutput, UserData } from "./authTypes";
import { logOutUser, loginUser, refreshUser, registerUser } from "./auth.operations";

const initialState: AuthInitialState = {
  userData: null,
  isLoggedIn: false,
  isLoading: false,
  isError: null,
  token: null,
  isRefreshing: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(
        loginUser.fulfilled,
        (state, { payload }: PayloadAction<LoginThunkOutput>) => {
          state.isLoading = false;
          state.userData = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(
        registerUser.fulfilled,
        (state, { payload }: PayloadAction<LoginThunkOutput>) => {
          state.isLoading = false;
          state.userData = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(
        refreshUser.fulfilled,
        (state, { payload }: PayloadAction<UserData>) => {
          state.userData = payload;
          state.isRefreshing = false;
          state.isLoggedIn = true;
        }
      )
      .addCase(
        logOutUser.fulfilled,
        (state) => {
          state.isError = null;
          state.userData = null;
          state.token = null;
          state.isLoggedIn = false;
          state.isRefreshing = false;
          state.isLoading = false;

        }
      )
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.isError = null;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.isError = true;
      })
      .addMatcher(isAnyOf(loginUser.pending, registerUser.pending, logOutUser.pending), (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addMatcher(
        isAnyOf(loginUser.rejected, registerUser.rejected,logOutUser.rejected),
        (state) => {
          state.isLoading = false;
          state.isError = true;

        }
      ),
});

export const authReducer = authSlice.reducer;
