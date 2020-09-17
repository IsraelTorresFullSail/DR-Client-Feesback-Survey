import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormErrors from '../form-errors/form-errors.component';

import './form-step4.styles.scss';

export class FormStep4 extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  submit = async (event) => {
    event.preventDefault();
    this.props.handleSubmit();
  };

  errorClass(error) {
    return error.length === 0 ? '' : 'has-error';
  }

  render() {
    const { values, handleChange, valid, errors } = this.props;
    return (
      <div className="layer4">
        <div className="digital-name"></div>
        <div className="white-box">
          <div className="logo"></div>
          <div className="form-container">
            <h1>Client Feedback Survey</h1>
            <h2>
              <strong>We're sorry to see you go.</strong> We would love to hear
              from you.
            </h2>
            <FormErrors formErrors={errors} />
            <div className="radio-buttons-wrapper">
              <label className="form-labels" htmlFor="recommend">
                <p className="span">
                  If we were able change things in the future,
                  <br />
                  would you consider working with us again?
                </p>
                <label className="form__labelInline" htmlFor="yes">
                  <input
                    type="radio"
                    name="recommend"
                    value={values.recommend === 'yes'}
                    className="form__input__radio"
                    id="yes"
                    onChange={handleChange}
                    checked
                  />
                  <span> Yes</span>
                </label>
                <label className="form__labelInline" htmlFor="no">
                  <input
                    type="radio"
                    name="recommend"
                    value={values.recommend === 'no'}
                    className="form__input__radio"
                    id="no"
                    onChange={handleChange}
                  />
                  <span> No</span>
                </label>
              </label>
            </div>
            <div className="fields-wrapper">
              <div className="buttons-container">
                <CustomButton onClick={this.back}>Back</CustomButton>
                <CustomButton
                  type="submit"
                  onClick={this.submit}
                  disabled={!valid}
                >
                  Submit Survey
                </CustomButton>
              </div>
              <div className="dots-wrapper">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot active"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FormStep4;
