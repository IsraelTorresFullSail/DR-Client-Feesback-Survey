import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './feedback-form.styles.scss';

import FormStep1 from '../form-step1/form-step1.component';
import FormStep2 from '../form-step2/form-step2.component';
import FormStep3 from '../form-step3/form-step3.component';
import FormStep4 from '../form-step4/form-step4.component';

export class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      redirect: false,
      firstName: '',
      lastName: '',
      businessName: '',
      frustrations: '',
      doneDifferently: '',
      recommend: 'yes',
      formErrors: {
        firstName: '',
        lastName: '',
        businessName: '',
        frustrations: '',
        doneDifferently: '',
        recommend: '',
      },
      firstNameValid: false,
      lastNameValid: false,
      businessNameValid: false,
      frustrationsValid: false,
      doneDifferentlyValid: false,
      recommendValid: false,
      formValid: false,
      copied: false,
    };
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    e.persist();
    this.setState({ [input]: e.target.value }, () => {
      this.validateField(input, e.target.value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let businessNameValid = this.state.businessNameValid;
    let frustrationsValid = this.state.frustrationsValid;
    let doneDifferentlyValid = this.state.doneDifferentlyValid;
    //let recommendValid = this.state.recommendValid;

    switch (fieldName) {
      case 'firstName':
        firstNameValid = value.length >= 2;
        fieldValidationErrors.firstName = firstNameValid
          ? ''
          : ' is empty or too short';
        break;
      case 'lastName':
        lastNameValid = value.length >= 2;
        fieldValidationErrors.lastName = lastNameValid
          ? ''
          : ' is empty or too short';
        break;
      case 'businessName':
        businessNameValid = value.length >= 2;
        fieldValidationErrors.businessName = businessNameValid
          ? ''
          : ' is empty or too short';
        break;
      case 'frustrations':
        frustrationsValid = value.length >= 2;
        fieldValidationErrors.frustrations = frustrationsValid
          ? ''
          : ' is empty or too short';
        break;
      case 'doneDifferently':
        doneDifferentlyValid = value.length >= 2;
        fieldValidationErrors.doneDifferently = doneDifferentlyValid
          ? ''
          : ' is empty or too short';
        break;
      //   case 'recommend':
      //     recommendValid = value.length >= 2;
      //     fieldValidationErrors.recommend = recommendValid
      //       ? ''
      //       : ' is empty or too short';
      //     break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        businessNameValid: businessNameValid,
        frustrationsValid: frustrationsValid,
        doneDifferentlyValid: doneDifferentlyValid,
        //recommendValid: recommendValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.firstNameValid &&
        this.state.lastNameValid &&
        this.state.businessNameValid &&
        this.state.frustrationsValid &&
        this.state.doneDifferentlyValid,
      //this.state.recommendValid &&
      //this.state.servicesValid,
    });
  }

  // Handle checkbox change
  handleCheckboxChange = (e) => {
    const { name } = e.target;
    this.setState((previousState) => {
      const services = { ...previousState.services };
      services[name] = !services[name];
      return { services };
    });
  };

  // Handle submit
  handleSubmit = (e) => {
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://usebasin.com/f/cedf30f6bad4';

    const {
      firstName,
      lastName,
      businessName,
      frustrations,
      doneDifferently,
      recommend,
    } = this.state;

    let formData = new FormData();
    formData.append('Subject', 'DR - Clients Feedback Survey');
    formData.append('Client Info:', '');
    formData.append('First Name:', firstName);
    formData.append('Last Name:', lastName);
    formData.append('Company Name:', businessName);
    formData.append(
      'What were your biggest frustrations when working with us?',
      frustrations
    );
    formData.append('What could we have done differently?', doneDifferently);
    formData.append(
      'Would the client doneDifferently DR to a friend?',
      doneDifferently
    );
    formData.append(
      'If we were able to change things in the future, would you consider working with us again?',
      recommend
    );

    let request = new XMLHttpRequest();
    request.open('POST', url);
    request.send(formData);

    this.setState({ redirect: true });
  };

  render() {
    const { step, redirect } = this.state;
    const {
      firstName,
      lastName,
      businessName,
      frustrations,
      doneDifferently,
      recommend,
      formErrors,
      copied,
    } = this.state;
    const values = {
      firstName,
      lastName,
      businessName,
      frustrations,
      doneDifferently,
      recommend,
      formErrors,
      copied,
    };

    return redirect ? (
      <Redirect to="/success" />
    ) : (
      <div className="container">
        {(() => {
          switch (step) {
            case 1:
              return (
                <FormStep1
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
            case 2:
              return (
                <FormStep2
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
            case 3:
              return (
                <FormStep3
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              );
            case 4:
              return (
                <FormStep4
                  prevStep={this.prevStep}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  values={values}
                  valid={this.state.formValid}
                  errors={this.state.formErrors}
                />
              );
            default:
              console.log('This is a multi-step form built with React.');
          }
        })()}
      </div>
    );
  }
}

export default FeedbackForm;
