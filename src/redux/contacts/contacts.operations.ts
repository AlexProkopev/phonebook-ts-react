import { createAsyncThunk } from "@reduxjs/toolkit";
import { Contact } from "src/types/types";
import { instance } from "../auth/auth.operations";

export const getContacts = createAsyncThunk<any, void>(
  "contacts/getContacts",
  async (_, thunkApi) => {
    try {

      const { data } = await instance.get<Contact[]>(
        "/contacts",
      );
     
      return data;
    } catch (err) {
      if (err instanceof Error) return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk<any, Omit<Contact, "id">>(
    "contacts/addContact",
    async (contact, thunkApi) => {
      try {
  
        const { data } = await instance.post<Contact>(
          "/contacts",
          contact
        );
       
        return data;
      } catch (err) {
        if (err instanceof Error) return thunkApi.rejectWithValue(err.message);
      }
    }
  );

  export const deletedContact = createAsyncThunk<any, string>(
    "contacts/deletedContact",
    async (contactId, thunkApi) => {
      try {
        const { data } = await instance.delete<Contact>(
          `/contacts/${contactId}`
        );
       
        return data;
      } catch (err) {
        if (err instanceof Error) return thunkApi.rejectWithValue(err.message);
      }
    }
  );