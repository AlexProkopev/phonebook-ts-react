import ContactsList from "src/components/ContactsList/ContactsList"
import FilterInput from "src/components/FilterInput/FilterInput"
import ContactForm from "src/components/Form/ContactForm"

export const Contacts = () => {
  return (
    <div>
        <ContactForm  />
      <FilterInput />
      <ContactsList/>
    </div>
  )
}
