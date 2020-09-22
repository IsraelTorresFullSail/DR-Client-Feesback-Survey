import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../custom-button/custom-button.component';

import './form-step1.styles.scss';

export class FormStep1 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="layer">
        <div className="digital-name"></div>
        <div className="white-box">
          <div className="logo"></div>
          <div className="form-container">
            <h1>Feedback Survey</h1>
            <h2>
              <strong className="strong">We're sorry to see you go.</strong> We would love to hear
              from you.
            </h2>
            <p className="p-ghost">
              Fields marketing with an <span className="required">*</span> are
              required
            </p>
            <div className="fields-wrapper">
              <TextField
                type="text"
                name="firstName"
                defaultValue={values.firstName}
                className={`form__input ${this.errorClass(
                  values.formErrors.firstName
                )}`}
                id="firstName"
                label="First Name"
                required
                onChange={handleChange('firstName')}
              />
              <TextField
                type="text"
                name="lastName"
                defaultValue={values.lastName}
                className={`form__input ${this.errorClass(
                  values.formErrors.lastName
                )}`}
                id="lastName"
                label="Last Name"
                required
                onChange={handleChange('lastName')}
              />
              <TextField
                type="text"
                name="businessName"
                defaultValue={values.businessName}
                className={`form__input ${this.errorClass(
                  values.formErrors.businessName
                )}`}
                id="businessName"
                label="Business Name"
                required
                onChange={handleChange('businessName')}
              />
              <CustomButton onClick={this.continue}>Next</CustomButton>
              <div className="dots-wrapper">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormStep1;
