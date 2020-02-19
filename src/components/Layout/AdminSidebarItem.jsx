import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import Link from 'next/link';

const AdminSidebarItem = (props) => {
  const {
    router, name, to, icon,
  } = props;
  return (
    <li className="nav-item">
      <Link
        href={to}
      >
        <a
          className={[
            'nav-link',
            router.pathname === to ? 'active' : '',
          ].join(' ')}
        >
          <i className={`nav-icon fa ${icon}`} />
          <p>{name}</p>
        </a>
      </Link>
    </li>
  );
};

AdminSidebarItem.propTypes = {
  name: PropTypes.string,
  router: PropTypes.object,
  to: PropTypes.string,
  icon: PropTypes.string,
};

AdminSidebarItem.defaultProps = {
  name: 'Home',
  router: {},
  to: '/',
  icon: 'fa-home',
};

export default withRouter(AdminSidebarItem);
