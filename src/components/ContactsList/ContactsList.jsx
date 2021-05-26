import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import contactsActions from '../../redux/contacts/contacts-action';
import './ContactsList.scss';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className="ContactsList">
    {contacts.map(({ id, name, number }) => (
      <li className="ContactsList__item" key={uuidv4()}>
        <p className="ContactsList__text">
          <span className="ContactsList__name">{name}</span>: {number}
        </p>
        <button
          className="ContactsList__button"
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const getFilterContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilterContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
