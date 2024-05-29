import { Contact } from "../../types/types";

export type ContactsInitialState = {
  contacts: null | Contact[];
  filter: string;
  editingContactId: null | string;
  isLoading: boolean;
  isError: null | boolean;
};

export type EditContactPayload = Omit <Contact, "id">