import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
