import { Component } from 'react';
import { connect } from 'react-redux';

import Title from '../Title';
import contactsActions from '../../redux/contacts/contacts-action';
import './ContactForm.scss';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    const { name, number } = this.state;

    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <Title title="Phonebook" />

        <div className="Phonebook">
          <form className="Phonebook__form" onSubmit={this.handleSubmit}>
            <label className="Phonebook__label">
              Name
              <input
                className="Phonebook__input"
                onChange={this.handleChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
              />
            </label>

            <label className="Phonebook__label">
              Number
              <input
                className="Phonebook__input"
                onChange={this.handleChange}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
              />
            </label>

            <button
              className="Phonebook__button"
              type="submit"
              disabled={!name && !number}
            >
              Add contact
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(Form);
