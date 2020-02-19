/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = props => {
  const {
    children,
    disabled,
    errormessage,
    id,
    isValid,
    label,
    name,
    onChange,
    touched,
    value,
  } = props;
  const invalid = !isValid && touched;
  const classes = invalid ? 'form-control is-invalid' : 'form-control';
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        className={classes}
        value={value}
        disabled={disabled}
        id={id}
        label={label}
        name={name}
        onChange={onChange}
      >
        {children}
      </select>
      {invalid ? (
        <div className="invalid-feedback">
          <i className="fa fa-exclamation-circle" />
          {` ${errormessage}`}
        </div>
      ) : null}
    </div>
  );
};

const TextInput = props => {
  const {
    disabled,
    errormessage,
    id,
    isValid,
    label,
    name,
    onChange,
    style,
    touched,
    type,
    value,
  } = props;
  const invalid = !isValid && touched;
  const classes = invalid ? 'form-control is-invalid' : 'form-control';
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        className={classes}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        style={style}
        type={type}
        value={value}
      />
      {invalid ? (
        <div className="invalid-feedback">
          <i className="fa fa-exclamation-circle" />
          {` ${errormessage}`}
        </div>
      ) : null}
    </div>
  );
};

const Input = props => {
  const { type } = props;
  switch (type) {
    case 'text':
    case 'number':
      return <TextInput {...props} />;
    case 'select':
      return <SelectInput {...props} />;
    default:
      return <TextInput {...props} />;
  }
};

const inputPropTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  errormessage: PropTypes.string,
  id: PropTypes.string,
  isValid: PropTypes.bool,
  label: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.any,
  touched: PropTypes.bool,
};

const inputDefaultProps = {
  children: null,
  disabled: false,
  id: '',
  isValid: true,
  label: '',
  name: '',
  errormessage: '',
  onChange: () => {},
  style: {},
  touched: false,
  type: '',
  value: '',
};

TextInput.propTypes = inputPropTypes;
TextInput.defaultProps = inputDefaultProps;

SelectInput.propTypes = inputPropTypes;
SelectInput.defaultProps = inputDefaultProps;

Input.propTypes = {
  type: PropTypes.string,
};

Input.defaultProps = {
  type: '',
};

export default Input;
