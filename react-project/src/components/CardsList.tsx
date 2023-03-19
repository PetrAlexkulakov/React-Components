import React from 'react';
import CardItem from './CardItem';
import axios from 'axios';
import MyInput from './UI/input/MyInput';

let posts: { id: number; title: string; body: string }[];
let images: { url: string }[];

(async function doPosts() {
  posts = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data.slice(0, 10);
  images = (await axios.get('https://jsonplaceholder.typicode.com/photos')).data.slice(0, 20);
})();
// const posts: { id: number; title: string; body: string }[] = (
//   await axios.get('https://jsonplaceholder.typicode.com/posts')
// ).data.slice(0, 10);
// const images = (await axios.get('https://jsonplaceholder.typicode.com/photos')).data.slice(0, 20);

class CardsList extends React.Component {
  private count: number;
  constructor(props: Record<string, never> | Readonly<Record<string, never>>) {
    super(props);
    this.count = 0;
  }

  private getCount() {
    return this.count++;
  }

  render() {
    return (
      <div className="card-list">
        <MyInput />
        {posts.map((post) => (
          <CardItem {...post} image={images[this.count++].url} key={post.id} />
        ))}
      </div>
    );
  }
}

export default CardsList;
