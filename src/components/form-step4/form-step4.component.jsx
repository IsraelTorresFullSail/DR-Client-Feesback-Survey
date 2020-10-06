import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import TextField from '@material-ui/core/TextField';

import './form-step4.styles.scss';

export class FormStep4 extends Component {
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
      <div className="layer4">
        <div className="digital-name"></div>
        <div className="white-box">
          <div className="logo"></div>
          <div className="form-container">
            <h1>Feedback Survey</h1>
            <h2>
              <strong>We're sorry to see you go.</strong> We would love to hear
              from you.
            </h2>
            <div className="fields-wrapper">
              <TextField
                type="text"
                name="acountManager"
                defaultValue={values.acountManager}
                className={`form__textarea ${this.errorClass(
                  values.formErrors.acountManager
                )}`}
                id="acountManager"
                label="How could your Account Manager have made your experience more positive?"
                multiline
                rows={14}
                required
                onChange={handleChange('acountManager')}
              />
              <div className="buttons-container">
                <CustomButton onClick={this.back}>Back</CustomButton>
                <CustomButton onClick={this.continue}>Next</CustomButton>
              </div>
              <div className="dots-wrapper">
                <div className="dot"></div>
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

export default FormStep4;
