import React from 'react';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Input from '../../UI/Input/Input';
import { login } from '../../../store/index';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.schema = yup.object({
      name: yup.string('Enter a valid name').required('User must have a name'),
      balance: yup.number('You must use numbers').required('User must have a balance'),
    });
  }

  render() {
    const { loginAction } = this.props;
    return (
      <div className="login-page">
        <div className="login-box" style={{ marginTop: -200 }}>
          <div className="login-logo">Accounting Web Service</div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <Formik
                validationSchema={this.schema}
                initialValues={{
                  name: '',
                  balance: '',
                }}
                enableReinitialize
                onSubmit={values => loginAction(values)}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <form onSubmit={handleSubmit}>
                    <Input
                      id="name"
                      label="Name"
                      type="text"
                      className="form-control mb-3"
                      name="name"
                      placeholder="name"
                      onChange={handleChange}
                      errormessage={errors.name}
                      value={values.name}
                      touched={touched.name}
                      isValid={!errors.name}
                      isInvalid={errors.name}
                    />
                    <Input
                      id="balance"
                      label="Balance"
                      type="number"
                      className="form-control"
                      name="balance"
                      placeholder="100000"
                      onChange={handleChange}
                      errormessage={errors.balance}
                      value={values.balance}
                      touched={touched.balance}
                      isValid={!errors.balance}
                      isInvalid={errors.balance}
                    />
                    <div className="row">
                      <div className="col-xs-8" />
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <button type="submit" className="btn btn-primary btn-block btn-flat">
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginAction: user => dispatch(login(user)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
