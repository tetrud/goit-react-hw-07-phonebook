import { connect } from 'react-redux';
import Title from '../Title';

import { contactsSelectors, changeFilter } from '../../redux/contacts';
import './ContactFilter.scss';

const ContactFilter = ({ value, onChange }) => (
  <>
    <Title title="Contacts" />

    <label className="Filter__label">
      Find contacts by name
      <input
        className="Filter__input"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
