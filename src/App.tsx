import { ChangeEvent, useState } from "react";
import "./App.css";
import ContactForm from "./components/Form/ContactForm";
import { Contact } from "./types/types";
import ContactsList from "./components/ContactsList/ContactsList";
import { nanoid } from "nanoid";
import FilterInput from "./components/FilterInput/FilterInput";
import { useDispatch } from "react-redux";

// const mockContacts: Contact[] = [
//   {
//     id: "1",
//     name: "John Doe",
//     phone: "123-456-7890",
//   },
//   {
//     id: "2",
//     name: "Jane Smith",
//     phone: "987-654-3210",
//   },
//   {
//     id: "3",
//     name: "Alice Johnson",
//     phone: "555-555-5555",
//   },
//   {
//     id: "4",
//     name: "Bob Brown",
//     phone: "111-222-3333",
//   },
//   {
//     id: "5",
//     name: "Emily Davis",
//     phone: "444-555-6666",
//   },
//   {
//     id: "6",
//     name: "Michael Wilson",
//     phone: "777-888-9999",
//   },
//   {
//     id: "7",
//     name: "Sarah Martinez",
//     phone: "333-111-0000",
//   },
//   {
//     id: "8",
//     name: "David Anderson",
//     phone: "666-999-8888",
//   },
//   {
//     id: "9",
//     name: "Jessica Taylor",
//     phone: "222-444-7777",
//   },
//   {
//     id: "10",
//     name: "Christopher Lopez",
//     phone: "888-777-6666",
//   },
// ];

function App() {

  return (
    <div>
      <ContactForm  />
      <FilterInput />
      <ContactsList/>
    </div>
  );
}

export default App;
