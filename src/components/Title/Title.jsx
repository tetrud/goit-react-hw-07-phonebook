import PropTypes from 'prop-types';

import './Title.scss';

const Title = ({ title }) => <h2 className="Title">{title}</h2>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
