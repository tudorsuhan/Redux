import React from 'react';
import PropTypes from 'prop-types';

const Employees = ({ name }) => (
  <p>{name}</p>
);

Employees.propTypes = {
  name: PropTypes.string,
};

Employees.defaultProps = {
  name: '',
};

export default Employees;
