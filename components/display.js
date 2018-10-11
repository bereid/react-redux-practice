import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ display }) => <p>{display}</p>;

Display.propTypes = {
  display: PropTypes.number.isRequired,
};

export default Display;
