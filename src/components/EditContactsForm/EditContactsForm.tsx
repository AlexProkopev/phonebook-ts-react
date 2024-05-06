import { Contact } from "../../types/types";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {
  onSaveEditedContact: (obj: Omit<Contact, "id">) => void;
  contacts: Contact[],
  editingContactId: string;
};



const schema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .matches(
      /^[A-ZА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$/,
      "You must enter only a valid name"
    ),
  phone: Yup.string()
    .required("Phone is required")
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      "Your phone number must match following pattern: +380669308825"
    ),
});

const EditContactForm = ({ onSaveEditedContact,contacts,editingContactId}: Props) => {

    const currentContact = contacts.find(contact => contact.id === editingContactId)

  const { handleSubmit, values, errors, touched, handleChange } = useFormik({
    initialValues: {
      name: currentContact?.name ?? "",
      phone: currentContact?.phone ?? "",
    },
    onSubmit: (values) => onSaveEditedContact(values),
    validationSchema: schema,
  });

  // const getInputClassName = errors.name ? "invalid" : "valid";
  // const getInputClassNumber = errors.phone ? "invalid" : "valid";

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={values.name}
        // pattern= "^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Muhmed"
        // className={getInputClassName}
        style={{ color: errors.name ? "red" : "green" }}
      />
      {touched.name && errors.name && <div>{errors.name}</div>}
      <input
        onChange={handleChange}
        type="tel"
        name="phone"
        value={values.phone}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        // pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        placeholder="+380669308825"
        required
        // className={getInputClassNumber}
        style={{ color: errors.phone ? "red" : "green" }}
      />
      {touched.phone && errors.phone && <div>{errors.phone}</div>}
      <button type="submit">submit</button>
    </form>
  );
};

export default EditContactForm;
