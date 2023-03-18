import React from 'react';
import { ChangeEvent } from 'react';

export class SearchForm extends React.Component<
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
  }

  render() {
    return (
      <form>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

export default SearchForm;
