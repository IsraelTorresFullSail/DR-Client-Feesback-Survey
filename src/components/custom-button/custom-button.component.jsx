import React from 'react';
import Button from '@material-ui/core/Button';
import './custom-button.styles.scss';

const CustomButton = ({ children, isSecondary, ...otherProps }) => (
  <Button
    className={`${isSecondary ? 'button-secondary' : ''} primary-button`}
    {...otherProps}
  >
    {children}
  </Button>
);

export default CustomButton;