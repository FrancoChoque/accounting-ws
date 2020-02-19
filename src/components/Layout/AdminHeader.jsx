/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../store/index';

const AdminHeader = ({ user, logoutAction }) => (
  <nav className="main-header navbar navbar-expand bg-white navbar-light border-bottom">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#">
          <i className="fa fa-bars" />
        </a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <div className="nav-link">Balance: ${user.balance}</div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <span>{user.name}</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <button
            type="button"
            onClick={() => console.log('logout')}
            className="dropdown-item dropdown"
          >
            My Account
          </button>
          <button type="button" onClick={logoutAction} className="dropdown-item dropdown">
            Logout
          </button>
        </div>
      </li>
    </ul>
  </nav>
);

AdminHeader.propTypes = {
  logoutAction: PropTypes.func,
  user: PropTypes.object,
};

AdminHeader.defaultProps = {
  logoutAction: () => {},
  user: {},
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

const mapDispatchToProps = dispatch => ({
  logoutAction: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);
