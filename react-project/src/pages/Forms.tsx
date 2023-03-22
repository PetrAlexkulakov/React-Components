import React, { MouseEventHandler, RefObject } from 'react';
import Header from '../components/Header';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import CardItem from '../components/CardItem';

type MyState = {
  posts: {
    body?: string;
    title?: string;
    key?: string;
  }[];
};

class Forms extends React.Component<Record<string, never>, MyState> {
  private formName: RefObject<HTMLInputElement>;
  private formDate: RefObject<HTMLInputElement>;
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { posts: [] };

    this.formName = React.createRef() as RefObject<HTMLInputElement>;
    this.formDate = React.createRef() as RefObject<HTMLInputElement>;
  }

  private addNewCard = (e: MouseEvent) => {
    e.preventDefault();
    // console.log(this.formName.current?.value);
    // console.log(this.formDate.current?.value);
    this.setState({
      posts: [
        ...this.state.posts,
        {
          body: this.formName.current?.value,
          title: this.formDate.current?.value,
          key: String(new Date()),
        },
      ],
    });
  };

  render() {
    return (
      <div>
        <Header title="Forms" />
        <form>
          Text: <MyInput ref={this.formName} type="text" placeholder="Text" />
          Date: <MyInput ref={this.formDate} type="date" placeholder="Date" />
          <MyButton onClick={this.addNewCard as unknown as MouseEventHandler<HTMLButtonElement>}>
            Create Card
          </MyButton>
        </form>
        <div>
          {this.state.posts.map((post) => (
            <CardItem {...post} image={'fsd'} key={post.key} />
          ))}
        </div>
      </div>
    );
  }
}

export default Forms;
