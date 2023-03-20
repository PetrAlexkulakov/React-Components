import React from 'react';
import classes from './MyInput.module.css';
import { ChangeEvent } from 'react';

class SearchForm extends React.Component<
  Record<string, (value: ChangeEvent<HTMLInputElement>) => void>,
  { value: string }
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { value: localStorage.getItem('searchString') || '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
    localStorage.setItem('searchString', event.target.value);
  }

  render(): React.ReactNode {
    return (
      <input
        placeholder="Search"
        onChange={this.handleChange}
        className={classes.myInput}
        {...this.props}
        value={this.state.value}
        type="text"
      />
    );
  }
}

export default SearchForm;
