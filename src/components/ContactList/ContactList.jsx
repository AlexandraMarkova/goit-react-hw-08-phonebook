import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  list: {
    textAlign: 'center',
    listStyleType: 'none',
  },
};

const ContactList = ({ contacts, onDeleteContacts }) =>
  contacts !== [] ? (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li style={styles.list} key={id}>
          <b>{name}:</b> <span>{number}</span>
          <IconButton
            aria-label="delete"
            color="secondary"
            // className={classes.button}
            onClick={() => onDeleteContacts(id)}
          >
            <DeleteIcon />
          </IconButton>
        </li>
      ))}
    </ul>
  ) : null;

export default ContactList;
