import React from 'react';
import CardItem from './CardItem';
import SearchForm from './UI/input/SearchForm';
import { posts } from '../data/posts';
import { photos } from '../data/images';

const CardsList = () => {
  let count = 0;

  return (
    <div>
      <SearchForm />
      <div className="card-list">
        {posts.map((post) => (
          <CardItem {...post} image={photos[count++].url} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
