import { RootState } from "../store";

export const selectAuthUserData = (state:RootState) => state.auth.userData;
export const selectAuthIsLoggedIn = (state:RootState) => state.auth.isLoggedIn;
export const selectAuthIsLoading = (state:RootState) => state.auth.isLoading;
export const selectAuthIsError = (state:RootState) => state.auth.isError;
export const selectAuthToken = (state:RootState) => state.auth.token;
export const selectAuthIsRefreshing = (state:RootState) => state.auth.isRefreshing;

