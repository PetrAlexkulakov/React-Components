import React from 'react';
import CardItem from './CardItem';
import axios from 'axios';

const resp: { id: number; title: string; body: string }[] = (
  await axios.get('https://jsonplaceholder.typicode.com/posts')
).data.slice(0, 10);

class CardsList extends React.Component {
  constructor(props: Record<string, never> | Readonly<Record<string, never>>) {
    super(props);
  }

  render() {
    return (
      <div>
        {resp.map((post) => (
          <CardItem {...post} key={post.id} />
        ))}
      </div>
    );
  }
}

export default CardsList;
