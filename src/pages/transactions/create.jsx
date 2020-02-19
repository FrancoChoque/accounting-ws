import React from 'react';
import AdminLayoutHoc from '../../components/Layout/AdminLayoutHoc';
import withAuth from '../../hoc/withAuth';
import TransactionForm from '../../components/Forms/Transaction/TransactionForm';

const CreateTransactionPage = () => (
  <AdminLayoutHoc
    contentTitle="New Transaction"
    contentTitleButton={<i className="fa fa-2x fa-home" />}
  >
    <div className="row justify-content-center">
      <div className="col-md-6 col-xs-12">
        <div className="card">
          <div className="card-body">
            <TransactionForm />
          </div>
        </div>
      </div>
    </div>
  </AdminLayoutHoc>
);

export default withAuth(CreateTransactionPage);
