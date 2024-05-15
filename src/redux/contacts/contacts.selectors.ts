import { RootState } from "../store";

export const selectContactsData = (state: RootState) => state.contactsStore.contacts
export const selectFilter = (state: RootState) => state.contactsStore.filter
export const selectEditingContactId = (state: RootState) => state.contactsStore.editingContactId