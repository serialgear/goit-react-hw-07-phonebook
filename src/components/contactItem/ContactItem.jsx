import PropTypes from 'prop-types';
import { ContactField, Contact, Button, Number } from './ContactItem.styled';

export const ContactItem = ({ contact, onDeleteClick }) => {
  return (
    <ContactField key={contact.id}>
      <Contact>{contact.name} : </Contact>
      <Number>{contact.number}</Number>
      <Button type="button" onClick={onDeleteClick}>
        delete
      </Button>
    </ContactField>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
