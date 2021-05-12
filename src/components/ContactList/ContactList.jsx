import React from 'react';

const ContactList = ({ contacts, onDeleteContacts }) =>
  contacts !== [] ? (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: <span>{number}</span>
          <button onClick={() => onDeleteContacts(id)}>Delete</button>
        </li>
      ))}
    </ul>
  ) : null;

export default ContactList;

