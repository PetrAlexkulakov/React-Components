import React from 'react';
import classes from './MyInput.module.css';
import { ChangeEvent } from 'react';
import { FormEventHandler } from 'react';

const SearchForm = (props: {
  def: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        placeholder="Search"
        className={classes.myInput}
        onChange={props.onChange}
        value={props.def}
        type="text"
      />
    </form>
  );
};

export default SearchForm;
