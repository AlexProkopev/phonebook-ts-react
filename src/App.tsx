import { ChangeEvent, useState } from "react";
import "./App.css";
import ContactForm from "./components/Form/ContactForm";
import { Contact } from "./types/types";
import ContactsList from "./components/ContactsList/ContactsList";
import { nanoid } from "nanoid";
import FilterInput from "./components/FilterInput/FilterInput";

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

function App() {
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);

  const [filter, setFilter] = useState("");

  const [editingContactId, setEditingContactId] = useState<null | string>(null);

  const onFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const onAddContact = (obj: Omit<Contact, "id">) => {
    const contact: Contact = {
      id: nanoid(),
      ...obj,
    };

    setContacts((prevState) => [...prevState, contact]);
  };

  const resultContact = contacts.filter((el) =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDelete = (id: string) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  }; // Delete

  const onEditContact = (id: string) => {
    setEditingContactId(id);
  };

  const onCloseEditing = () => {
    setEditingContactId(null);
  };

  const onSaveEditContact = (newDataContact: Omit<Contact, "id">) => {
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === editingContactId) {
        return {
          ...contact,
          ...newDataContact,
        };
      }
      return contact;
    });

    setContacts(updatedContacts);

    onCloseEditing();
  };

  return (
    <div>
      <ContactForm onAddContact={onAddContact} />
      <FilterInput value={filter} onChange={onFilter} />
      <ContactsList
        contacts={resultContact}
        onDelete={onDelete}
        onEditContact={onEditContact}
        onCloseEditing={onCloseEditing}
        onSaveEditContact={onSaveEditContact}
        editingContactId={editingContactId}
      />
    </div>
  );
}

export default App;
