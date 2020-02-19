/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './Transaction.module.css';

const Transaction = ({ transaction }) => {
  const [show, toggleShow] = useState(false);
  return (
    <div className="col-12">
      <div className="card">
        <div
          className={['card-header', styles.CardHeader].join(' ')}
          role="presentation"
          onClick={() => toggleShow(!show)}
        >
          <span className={transaction.type === 'debit' ? 'btn btn-primary' : 'btn btn-info'}>
            {transaction.type}
          </span>{' '}
          <span className="card-text float-right"> Amount: ${transaction.amount} </span>
        </div>
        <div
          id="collapseOne"
          className={show ? 'panel-collapse in collapse show' : 'panel-collapse in collapse'}
        >
          <div className="card-body">
            <span>
              <p>ID: {transaction.id}</p>
              <p>
                {' '}
                <i className="fa fa-clock-o" aria-hidden="true" /> Effective Date:
                {moment(transaction.effectiveDate).format('MM/DD/YYYY HH:mm')}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.object,
};

Transaction.defaultProps = {
  transaction: {},
};

export default Transaction;
