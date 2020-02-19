import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import AdminSidebarItem from './AdminSidebarItem';

const AdminSidebar = props => {
  const { projectName } = props;
  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{ height: '100vh', position: 'fixed' }}
    >
      <Link href="/">
        <a className="brand-link mx-2">
          <span className="brand-text font-weight-light">{projectName}</span>
        </a>
      </Link>

      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <AdminSidebarItem to="/transactions/create" name="New Transaction" />
            <AdminSidebarItem to="/transactions" name="Transtactions" />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

AdminSidebar.propTypes = {
  projectName: PropTypes.string,
};

AdminSidebar.defaultProps = {
  projectName: 'Accounting',
};

export default AdminSidebar;
