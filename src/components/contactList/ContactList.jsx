import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebookSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/contactItem/ContactItem';

export const ContactList = () => {
  const contactList = useSelector(getContacts);
  const contactFilter = useSelector(getFilter);

  const dispatch = useDispatch();
  const filtredContact = contactList.filter(contact =>
    contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  );

  return filtredContact.map(contact => (
    <ContactItem
      key={contact.id}
      contact={contact}
      onDeleteClick={() => dispatch(deleteContact(contact.id))}
    />
  ));
};
