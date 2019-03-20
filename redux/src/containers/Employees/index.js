import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Employees from '../../components/Employees';
import './index.scss';

import { employeesStatus } from '../../actions/employees';
import { getEmployeesSelector, getEmployeesLoadingSelector, getEmployeesErrorSelector } from '../../selectors/employees';

class EmployeesContainer extends Component {
  static propTypes = {
    employees: PropTypes.instanceOf(Object),
    loading: PropTypes.bool,
    error: PropTypes.bool,
    getEmployees: PropTypes.func,
  };

  static defaultProps = {
    employees: null,
    loading: null,
    error: null,
    getEmployees: () => {},
  };

  componentDidMount() {
    const { getEmployees } = this.props;

    getEmployees();
  }

  render() {
    const { employees, loading, error } = this.props;

    if (!employees) {
      return <div>No data available...</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <div className="employees">
        {
          Object.values(employees).map(employee => (
            <Employees key={employee.id} name={employee.employee_name} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: getEmployeesSelector(state),
  loading: getEmployeesLoadingSelector(state),
  error: getEmployeesErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  getEmployees: () => dispatch(employeesStatus()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);
