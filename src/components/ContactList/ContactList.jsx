import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const getFilteredContacts = (contacts, filterValue) =>
  contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue)
  );

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectNameFilter);
  const filteredContacts = getFilteredContacts(contacts, filterValue);

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, number, name }) => (
        <Contact key={id} id={id} number={number} name={name} />
      ))}
    </ul>
  );
};

export default ContactList;
