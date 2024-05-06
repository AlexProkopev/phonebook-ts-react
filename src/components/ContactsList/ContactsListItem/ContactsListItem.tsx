import { Contact } from "../../../types/types";
import EditContactForm from "../../EditContactsForm/EditContactsForm";

type Props = {
  contact: Contact;
  contacts: Contact[];
  onDelete: (id: string) => void;
  onEditContact: (id: string) => void;
  onCloseEditing: () => void;
  onSaveEditContact: (newDataContact: Omit<Contact, "id">) => void;
  editingContactId: string | null;
};

const ContactsListItem = ({
  contacts,
  contact: { id, name, phone },
  onDelete,
  onEditContact,
  onCloseEditing,
  onSaveEditContact,
  editingContactId,
}: Props) => {
  const isContactEditing = editingContactId === id;
  return (
    <li>
      <p>{name}</p>
      <p>{phone}</p>
      <button type="button" onClick={() => onDelete(id)}>
        del
      </button>
      <button
        type="button"
        onClick={() =>
          isContactEditing ? onCloseEditing() : onEditContact(id)
        }
      >
        {isContactEditing ? "close" : "edit"}
      </button>
      {isContactEditing && (
        <EditContactForm
          onSaveEditedContact={onSaveEditContact}
          editingContactId={editingContactId}
          contacts={contacts}
        />
      )}
    </li>
  );
};

export default ContactsListItem;
