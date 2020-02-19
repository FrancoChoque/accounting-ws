import React from 'react';
import PropTypes from 'prop-types';

const AdminContent = ({ children, title, titleButton }) => (
  <div className="content-wrapper" style={{ minHeight: '93vh' }}>
    <div className="content-header">
      {title && (
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-10">
              <h1 className="m-0 text-dark">{title}</h1>
            </div>
            <div className="col-sm-2 text-right text-muted">{titleButton && titleButton}</div>
          </div>
        </div>
      )}
    </div>
    <div className="content">
      <div className="container-fluid">{children}</div>
    </div>
  </div>
);

AdminContent.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  titleButton: PropTypes.node,
};

AdminContent.defaultProps = {
  children: null,
  title: '',
  titleButton: '',
};

export default AdminContent;
