import React from 'react';
import classes from './MyInput.module.css';
import { ChangeEvent } from 'react';

const SearchForm = (props: {
  def: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      placeholder="Search"
      className={classes.myInput}
      {...props}
      value={props.def}
      type="text"
    />
  );
};

export default SearchForm;
