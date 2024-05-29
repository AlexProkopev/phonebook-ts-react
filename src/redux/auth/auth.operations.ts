import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LoginThunkInput, LoginThunkOutput, RegisterThunkInput, UserData } from "./authTypes";
import { RootState } from "../store";

export const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com/",
});
export const setToken = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = ()=> {
  instance.defaults.headers.common.Authorization = ``;
}

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


export const refreshUser = createAsyncThunk<any, void>(
  "users/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState() as RootState;
      const token = state.auth.token
      if(token === null){
        return thunkApi.rejectWithValue("Token is null")
      };

  
      setToken(token);

      const { data } = await instance.get<UserData>("/users/current");
     
      return data;
    } catch (err) {
      if (err instanceof Error) return thunkApi.rejectWithValue(err.message);
    }
  }
);
// export const refreshUser = createAsyncThunk<any, void>(
//   "users/refresh",
//   async (_, thunkApi) => {
//     try {
//       const state = thunkApi.getState() as RootState;
//       const token = state.auth.token as string;

  
//       setToken(token);

//       const { data } = await instance.get<UserData>("/users/current");
     
//       return data;
//     } catch (err) {
//       if (err instanceof Error) return thunkApi.rejectWithValue(err.message);
//     }
//   },{
//     condition:(_,thunkApi)=>{
//       const state = thunkApi.getState() as RootState;
//       const token = state.auth.token

//       if(token) return true
//       return false
//   }}
// );

export const logOutUser = createAsyncThunk<any, void>(
  "auth/logOut",
  async (_, thunkApi) => {
    try {
      await instance.post<void>("/users/logout");
      clearToken()
      return
    } catch (err) {
      if (err instanceof Error) return thunkApi.rejectWithValue(err.message);
    }
  }
);