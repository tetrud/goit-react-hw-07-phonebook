import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Spinner from '../Loader';

import './ContactsList.scss';

const ContactsList = ({ contacts, onDeleteContact, isLoadingContacts }) => (
  <>
    {isLoadingContacts && <Spinner />}

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
  </>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactsList;
