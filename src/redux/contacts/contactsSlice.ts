import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactsInitialState, EditContactPayload } from "./contactsTypes";
import { Contact } from "../../types/types";

// import { deleteContactThunk, fetchContactsList } from './services';

 const mockContacts: Contact[] = [
      {
        id: "1",
        name: "John Doe",
        phone: "123-456-7890",
      },
      {
        id: "2",
        name: "Jane Smith",
        phone: "987-654-3210",
      },
      {
        id: "3",
        name: "Alice Johnson",
        phone: "555-555-5555",
      },
      {
        id: "4",
        name: "Bob Brown",
        phone: "111-222-3333",
      },
      {
        id: "5",
        name: "Emily Davis",
        phone: "444-555-6666",
      },
      {
        id: "6",
        name: "Michael Wilson",
        phone: "777-888-9999",
      },
      {
        id: "7",
        name: "Sarah Martinez",
        phone: "333-111-0000",
      },
      {
        id: "8",
        name: "David Anderson",
        phone: "666-999-8888",
      },
      {
        id: "9",
        name: "Jessica Taylor",
        phone: "222-444-7777",
      },
      {
        id: "10",
        name: "Christopher Lopez",
        phone: "888-777-6666",
      },
    ];


const initialState: ContactsInitialState = {
  contacts: mockContacts,
  filter: "",
  editingContactId: null ,
  //   isLoading: false,
  //   isError: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, { payload }: PayloadAction<Contact>) => {
      if (state.contacts !== null) {
        state.contacts.push(payload);
        // state.contacts = [...state.contacts, payload]
      }
    },
    setFilter: (state, { payload }: PayloadAction<string>) => {
      state.filter = payload;
    },
    deletedContact: (state, { payload }: PayloadAction<string>) => {
      if (state.contacts !== null) {
        //state.contacts = state.contacts.filter(contact => contact.id !== payload)
        const deletingContactsIndex = state.contacts.findIndex(
          (contact) => contact.id === payload
        );
        if (deletingContactsIndex !== -1) {
          state.contacts.splice(deletingContactsIndex, 1);
        }
      }
    },
    setEditingContactId: (state, { payload }: PayloadAction<string | null>) => {
      state.editingContactId = payload;
    },
    editContact: (state, { payload }: PayloadAction<EditContactPayload>) => {
      if (state.contacts !== null) {
        const updatedContacts = state.contacts.map((contact) => {
          if (contact.id === state.editingContactId) {
            return {
              ...contact,
              ...payload,
            };
          }
          return contact;
        });

        state.contacts = updatedContacts;
        state.editingContactId = null;
      }
    },
  },
  //   extraReducers: builder =>
  //     builder
  //       .addCase(fetchContactsList.fulfilled, (state, { payload }) => {
  //         state.isLoading = false;
  //         state.contacts = payload;
  //       })
  //       .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
  //         state.isLoading = false;
  //       })
  //       .addMatcher(
  //         isAnyOf(fetchContactsList.pending, deleteContactThunk.pending),
  //         state => {
  //           state.isLoading = true;
  //           state.isError = null;
  //         }
  //       )
  //       .addMatcher(
  //         isAnyOf(fetchContactsList.rejected, deleteContactThunk.rejected),
  //         (state, { payload }) => {
  //           state.isLoading = false;
  //           state.isError = payload;
  //         }
  //       ),
});

export const { addContact,setFilter,deletedContact,setEditingContactId,editContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
