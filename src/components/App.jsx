import { Component } from 'react';
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return '';
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  handleFilter = text => {
    this.setState({ filter: text });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} value={filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.onDeleteContact}
        />
      </>
    );
  }
}
