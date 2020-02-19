import React from 'react';
import Router from 'next/router';
import AdminLayoutHoc from '../components/Layout/AdminLayoutHoc';
import withAuth from '../hoc/withAuth';

const Index = () => (
  <AdminLayoutHoc contentTitle="Dashboards" contentTitleButton={<i className="fa fa-2x fa-home" />}>
    HOME
  </AdminLayoutHoc>
);

Index.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/transactions',
    });
    res.end();
  } else {
    Router.push('/transactions');
  }
  return {};
};

export default withAuth(Index);
