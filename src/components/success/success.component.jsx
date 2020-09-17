/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import './success.styles.scss';

class Success extends Component {
  state = {
    testimonial: '',
    copied: false,
  };

  componentDidMount() {
    const testimonial = localStorage.getItem('testimonial');
    this.setState({ testimonial });
  }
  copy = () => {
    this.props.handleCopy();
  };

  render() {
    return (
      <div className="container">
        <div className="layer6">
          <div className="digital-name"></div>
          <div className="white-box6">
            <div className="success-container-text">
              <div className="success-right">
                <h2 className="h2-white">
                  Our doors are always open for you
                  <br />
                  should anything change in the future.
                  <br />
                  <span className="upper">
                    Thank you for being a valued client.
                  </span>
                </h2>
                <div className="logo6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
