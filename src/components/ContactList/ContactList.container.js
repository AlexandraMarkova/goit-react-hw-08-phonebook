import { connect } from 'react-redux';
import { deleteContacts } from '../../redux/contact/contact-operations';
import ContactList from './ContactList';
import { getVisibleContacts } from '../../redux/contact/contacts-selectors';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
