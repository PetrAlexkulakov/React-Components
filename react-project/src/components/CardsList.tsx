import React from 'react';
import CardItem from './CardItem';
import SearchForm from './UI/input/SearchForm';
import { posts } from '../data/posts';
import { photos } from '../data/images';

class CardsList extends React.Component {
  private count: number;
  constructor(props: Record<string, never> | Readonly<Record<string, never>>) {
    super(props);
    this.count = 0;
  }

  render() {
    return (
      <div className="card-list">
        <SearchForm />
        {posts.map((post) => (
          <CardItem {...post} image={photos[this.count++].url} key={post.id} />
        ))}
      </div>
    );
  }
}

export default CardsList;
