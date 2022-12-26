export const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li key={id} id={id}>
      <p>{name + ': ' + number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
