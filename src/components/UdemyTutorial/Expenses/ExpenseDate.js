import { capitalize } from '@material-ui/core';
import React from 'react';

import './ExpenseDate.css';

  /**
   * Format date
   * 
   * @author Jean Trujillo
   * @see https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
   * @since 17/03/2022
   */
const ExpenseDate = (props) => {

  const month = capitalize(  props.date.toLocaleString('es-VE', { month: 'long' })  );
  const day   = capitalize(  props.date.toLocaleString('es-VE', { day: '2-digit'})  );
  const year  = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;