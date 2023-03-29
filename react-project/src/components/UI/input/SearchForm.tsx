import React, { useState } from 'react';
import classes from './MyInput.module.css';
import { ChangeEvent } from 'react';

const SearchForm = (props: Record<string, never>) => {
  const [defValue, setDefVal] = useState(localStorage.getItem('searchString') || '');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDefVal(event.target.value);
    localStorage.setItem('searchString', event.target.value);
  }

  return (
    <input
      placeholder="Search"
      onChange={handleChange}
      className={classes.myInput}
      {...props}
      value={defValue}
      type="text"
    />
  );
};

export default SearchForm;
