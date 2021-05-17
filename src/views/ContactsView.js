import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';


import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { fetchContacts } from '../redux/contact/contact-operations';
import { getLoading, getError } from '../redux/contact/contacts-selectors';

const styles = {
  text: {
    textAlign: 'center',
  }
};

class ContactsView extends Component {
 
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        <h1 style={styles.text}>Phonebook</h1>

        {this.props.isError && <h1>Sorry, please try later</h1>}

        <ContactForm />

        <h2 style={styles.text}>Contacts</h2>

        <Filter />
        {this.props.isLoadingContacts && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
  isError: getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
