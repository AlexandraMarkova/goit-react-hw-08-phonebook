import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { fetchContacts } from './redux/contact/contact-operations';
import { getLoading, getError } from './redux/contact/contacts-selectors';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>

          {this.props.isError && <h1>Sorry, please try later</h1>}
        
          <ContactForm />

          <h2>Contacts</h2>

          <Filter />
          {this.props.isLoadingcontacts && (
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          )}
          <ContactList />
        </div>
      </Container>
    );
  }
};

const mapStateToProps = state => ({
  isLoadingcontacts: getLoading(state),
  isError: getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);;
