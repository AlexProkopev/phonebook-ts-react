import { useDispatch, useSelector } from "react-redux";
import {
  selectContactsData,
  selectEditingContactId,
  selectFilter,
} from "../../redux/contacts/contacts.selectors";
import { Contact } from "../../types/types";
import ContactsListItem from "./ContactsListItem/ContactsListItem";
import {
  deletedContact,
  editContact,
  setEditingContactId,
} from "../../redux/contacts/contactsSlice";

const ContactsList = () => {
  const contacts = useSelector(selectContactsData);
  const editingContactId = useSelector(selectEditingContactId);
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onDelete = (id: string) => {
    dispatch(deletedContact(id));
  }; // Delete

  const onEditContact = (id: string) => {
    dispatch(setEditingContactId(id));
  };

  const onCloseEditing = () => {
    dispatch(setEditingContactId(null));
  };

  const onSaveEditContact = (newDataContact: Omit<Contact, "id">) => {
    dispatch(editContact(newDataContact));
  };

  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
  );
  return (
    <ul>
      {filteredContacts !== undefined &&
        filteredContacts.map((contact) => {
          return (
            <ContactsListItem
              key={contact.id}
              contact={contact}
              contacts={filteredContacts}
              onDelete={onDelete}
              onEditContact={onEditContact}
              onCloseEditing={onCloseEditing}
              onSaveEditContact={onSaveEditContact}
              editingContactId={editingContactId}
            />
          );
        })}
    </ul>
  );
};

export default ContactsList;
