import React from 'react';
import './checkbox.styles.scss'

const Checkbox = props => (
    <input className='checkbox' type="checkbox" {...props} />
)

export default Checkbox;