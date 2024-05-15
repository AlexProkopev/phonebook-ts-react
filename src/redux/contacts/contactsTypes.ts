import { Contact } from "../../types/types";

export type ContactsInitialState = {
  contacts: null | Contact[];
  filter: string;
  editingContactId: null | string;
};

export type EditContactPayload = Omit <Contact, "id">