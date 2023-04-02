import React, { useState, ChangeEvent } from 'react';
import CardItem from './CardItem';
import SearchForm from './UI/input/SearchForm';
import { posts } from '../data/posts';

const CardsList = () => {
  const [defValue, setDefVal] = useState(localStorage.getItem('searchString') || '');
  const [sortedPosts, setSortedPosts] = useState(posts);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDefVal(event.target.value);
    localStorage.setItem('searchString', event.target.value);
    setSortedPosts(
      posts.filter((post) => post.title.toLowerCase().includes(event.target.value.toLowerCase()))
    );
  }

  return (
    <div>
      <SearchForm data-testid="search-input" def={defValue} onChange={handleChange} />
      <div className="card-list">
        {sortedPosts.map((post) => (
          <CardItem {...post} image={post.image} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
