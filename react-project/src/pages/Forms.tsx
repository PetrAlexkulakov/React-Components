import React, { ChangeEventHandler, MouseEventHandler, RefObject } from 'react';
import Header from '../components/Header';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import CardItem from '../components/CardItem';
import { BaseSyntheticEvent } from 'react';

type MyState = {
  posts: {
    body?: string;
    title?: string;
    key?: string;
    date?: string;
    accept?: string;
    switch?: string;
  }[];
};

class Forms extends React.Component<Record<string, never>, MyState> {
  private formName: RefObject<HTMLInputElement>;
  private formDate: RefObject<HTMLInputElement>;
  private formCity: string;
  private formAccept: RefObject<HTMLInputElement>;
  private formSwitch: string;
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { posts: [] };

    this.formName = React.createRef() as RefObject<HTMLInputElement>;
    this.formDate = React.createRef() as RefObject<HTMLInputElement>;
    this.formCity = 'Moscow';
    this.selectChange = this.selectChange.bind(this);
    this.formAccept = React.createRef() as RefObject<HTMLInputElement>;
    this.formSwitch = 'First';
  }

  private addNewCard = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({
      posts: [
        ...this.state.posts,
        {
          key: String(new Date()),
          title: this.formDate.current?.value,
          body: this.formName.current?.value,
          date: this.formCity,
          switch: this.formSwitch,
        },
      ],
    });
    this.formSwitch = 'First';
  };

  private selectChange(e: BaseSyntheticEvent) {
    this.formCity = String(e.target.value);
  }

  render() {
    return (
      <div>
        <Header title="Forms" />
        <form className="form-wrapper">
          <div>
            Text: <MyInput ref={this.formName} type="text" placeholder="Text" />
          </div>
          <div>
            Date: <MyInput ref={this.formDate} type="date" placeholder="Date" />
          </div>
          <div>
            City:
            <select
              onChange={this.selectChange as unknown as ChangeEventHandler<HTMLSelectElement>}
            >
              <option value="Moscow">Moscow</option>
              <option value="New York">New York</option>
              <option value="Another">Another</option>
            </select>
          </div>
          <div>
            <MyInput ref={this.formAccept} type="checkbox" /> I consent to my personal data
          </div>
          <div>
            <MyInput
              onClick={() => (this.formSwitch = 'First')}
              type="radio"
              name="number"
              checked
            />{' '}
            First{' '}
            <MyInput onClick={() => (this.formSwitch = 'Second')} type="radio" name="number" />{' '}
            Second
          </div>
          <MyButton onClick={this.addNewCard as unknown as MouseEventHandler<HTMLButtonElement>}>
            Create Card
          </MyButton>
        </form>
        <div className="card-list">
          {this.state.posts.map((post) => (
            <CardItem {...post} image={'fsd'} key={post.key} />
          ))}
        </div>
      </div>
    );
  }
}

export default Forms;
