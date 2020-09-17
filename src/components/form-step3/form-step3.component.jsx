import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../custom-button/custom-button.component';

import './form-step3.styles.scss';

export class FormStep3 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="layer3">
        <div className="digital-name"></div>
        <div className="white-box">
          <div className="logo"></div>
          <div className="form-container">
            <h1>Client Feedback Survey</h1>
            <h2>
              <strong>We're sorry to see you go.</strong> We would love to hear
              from you.
            </h2>
            <div className="fields-wrapper">
              <TextField
                type="text"
                name="doneDifferently"
                defaultValue={values.doneDifferently}
                className={`form__textarea ${this.errorClass(
                  values.formErrors.doneDifferently
                )}`}
                id="doneDifferently"
                label="What could we have done differently?"
                multiline
                rows={14}
                required
                onChange={handleChange('doneDifferently')}
              />
              <div className="buttons-container">
                <CustomButton onClick={this.back}>Back</CustomButton>
                <CustomButton onClick={this.continue}>Next</CustomButton>
              </div>
              <div className="dots-wrapper">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot active"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormStep3;
