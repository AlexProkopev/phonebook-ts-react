import { Contact } from "../../types/types";
import ContactsListItem from "./ContactsListItem/ContactsListItem";

type Props = {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onEditContact: (id: string) => void;
  onCloseEditing: () => void;
  onSaveEditContact: (newDataContact: Omit<Contact, "id">) => void;
  editingContactId: string | null;
};

const ContactsList = ({
  contacts,
  onDelete,
  onEditContact,
  onCloseEditing,
  onSaveEditContact,
  editingContactId,
}: Props) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            contacts={contacts}
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
