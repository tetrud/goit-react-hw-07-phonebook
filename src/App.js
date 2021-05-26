import { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from './components/ContactForm';
import ContactsList from './components/ContactsList';
import ContactFilter from './components/ContactFilter';
import { contactsOperations } from './redux/contacts';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <ContactForm />
        <ContactFilter />
        <ContactsList />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
