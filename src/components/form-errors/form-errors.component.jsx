import React from 'react';
import './form-errors.styles.scss'

const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>Please complete all the required fields</p>
        )        
      } else {
        return '';
      }
    })}
  </div>

export default FormErrors;  