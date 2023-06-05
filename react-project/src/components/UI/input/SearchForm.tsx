import React from 'react';
import classes from './MyInput.module.css';
import { ChangeEvent } from 'react';
import { FormEventHandler } from 'react';

const SearchForm = (props: {
  def: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Enter the text you are looking for:{' '}
        <input
          placeholder="Search"
          className={classes.myInput}
          onChange={props.onChange}
          value={props.def}
          type="text"
          data-testid="search-input"
        />
      </label>
    </form>
  );
};

export default SearchForm;
