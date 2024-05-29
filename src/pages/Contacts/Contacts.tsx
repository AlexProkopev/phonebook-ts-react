import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactsList from "src/components/ContactsList/ContactsList"
import FilterInput from "src/components/FilterInput/FilterInput"
import ContactForm from "src/components/Form/ContactForm"
import { getContacts } from "src/redux/contacts/contacts.operations";

export const Contacts = () => {
  const dispatch = useDispatch();
useEffect(() => {
  dispatch<any>(getContacts());
},[dispatch])
  return (
    <div>
        <ContactForm  />
      <FilterInput />
      <ContactsList/>
    </div>
  )
}
