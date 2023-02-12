import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from 'components/contactItem/ContactItem';

export const ContactList = () => {
  const contactList = useSelector(selectContacts);
  const contactFilter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const filteredContact = contactList.filter(contact =>
    contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  );

  return filteredContact.map(contact => (
    <ContactItem
      key={contact.id}
      contact={contact}
      onDeleteClick={() => dispatch(deleteContact(contact.id))}
    />
  ));
};
