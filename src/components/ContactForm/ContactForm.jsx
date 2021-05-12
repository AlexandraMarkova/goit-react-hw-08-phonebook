import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import * as operations from '../../redux/contact/contact-operations';
import { getAllContacts } from '../../redux/contact/contacts-selectors';


class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const unavailableName = this.props.contacts.find(
      contact => contact.name === this.state.name,
    );
    if (unavailableName) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(operations.addContacts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
