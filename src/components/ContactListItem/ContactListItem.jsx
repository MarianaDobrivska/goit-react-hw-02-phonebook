export const ContactListItem = ({ name, number, id }) => {
  return (
    <li key={id} id={id}>
      <p>{name + ': ' + number}</p>
    </li>
  );
};
