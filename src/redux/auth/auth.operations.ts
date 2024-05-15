import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginThunkInput, LoginThunkOutput, RegisterThunkInput } from "./authTypes";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});
export const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const loginUser = createAsyncThunk<any, LoginThunkInput>(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post<LoginThunkOutput>(
        "/users/login",
        formData
      );
      console.log("data: ", data);
      setToken(data.token);
      return data;
    } catch (err) {
      if (err instanceof Error) return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const registerUser = createAsyncThunk<any, RegisterThunkInput>(
  "users/signup",
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post<LoginThunkOutput>("/users/signup", formData);
      console.log(data);
      setToken(data.token);
      return data;
    } catch (err) {
      if (err instanceof Error) return thunkApi.rejectWithValue(err.message);
    }
  }
);
