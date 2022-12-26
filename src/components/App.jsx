// export const App = () => {
//   return <div></div>;
// };

import { Component } from 'react';
import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleFilter = text => {
    this.setState({ filter: text });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilter} value={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </>
    );
  }
}
