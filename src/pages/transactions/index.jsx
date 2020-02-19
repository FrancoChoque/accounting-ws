import React from 'react';
import AdminLayoutHoc from '../../components/Layout/AdminLayoutHoc';
import withAuth from '../../hoc/withAuth';
import Transactions from '../../components/Transactions/Transactions';

const Index = () => (
  <AdminLayoutHoc contentTitle="Transactions" contentTitleButton={null}>
    <div className="card">
      <div className="card-body">
        <Transactions />
      </div>
    </div>
  </AdminLayoutHoc>
);

export default withAuth(Index);
