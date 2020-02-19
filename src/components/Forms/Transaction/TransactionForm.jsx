import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import Input from '../../UI/Input/Input';
import { createTransaction } from '../../../store/index';

const schema = yup.object({
  amount: yup
    .number()
    .max(99999999)
    .min(1)
    .required(),
  type: yup.string().required(),
});

const TransactionForm = ({ createTransactionAction }) => (
  <Formik
    validationSchema={schema}
    initialValues={{
      amount: '',
      type: '',
    }}
    enableReinitialize
    onSubmit={values => createTransactionAction(values)}
  >
    {({ handleSubmit, handleChange, values, touched, errors }) => (
      <form name="myForm" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <Input
              type="number"
              label="Amount"
              name="amount"
              id="amount"
              errormessage="Invalid amount"
              onChange={handleChange}
              value={values.amount}
              touched={touched.amount}
              isValid={!errors.amount}
              isInvalid={errors.amount}
            />
          </div>
          <div className="col-12">
            <Input
              type="select"
              label="Type"
              name="type"
              id="type"
              onChange={handleChange}
              value={values.type}
              touched={touched.type}
              isValid={!errors.type}
              isInvalid={errors.type}
            >
              <option value="" disabled>
                -
              </option>
              <option value="debit">Debit</option>
              <option value="credit">Credit</option>
            </Input>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="submit" className="btn btn-primary pull-left">
              Create Transaction
            </button>
          </div>
        </div>
      </form>
    )}
  </Formik>
);

TransactionForm.propTypes = {
  createTransactionAction: PropTypes.func,
};

TransactionForm.defaultProps = {
  createTransactionAction: () => {},
};

const mapDispatchToProps = dispatch => ({
  createTransactionAction: transaction => dispatch(createTransaction(transaction)),
});

export default connect(null, mapDispatchToProps)(TransactionForm);
