import React from 'react';
import { connect } from 'react-redux';
import Transaction from './Transaction/Transaction';

const Transactions = ({ transactions }) => {
  if (!transactions.length) return <div>No transactions</div>;
  const transactionArr = transactions.map(each => <Transaction key={each.id} transaction={each} />);
  return <>{transactionArr}</>;
};

const mapStateToProps = ({ transactions }) => ({
  transactions: transactions.transactions,
});

export default connect(mapStateToProps)(Transactions);
