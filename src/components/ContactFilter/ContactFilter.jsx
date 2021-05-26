import { connect } from 'react-redux';

import contactsActions from '../../redux/contacts/contacts-action';
import './ContactFilter.scss';

const ContactFilter = ({ value, onChange }) => (
  <label className="Filter__label">
    Find contacts by name
    <input
      className="Filter__input"
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
