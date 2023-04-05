import React, { useState, ChangeEvent, useEffect } from 'react';
import CardItem from './CardItem';
import SearchForm from './UI/input/SearchForm';
import { posts } from '../data/posts';

const CardsList = () => {
  const [defValue, setDefVal] = useState(localStorage.getItem('searchString') || '');
  const [sortedPosts, setSortedPosts] = useState([{ image: '', name: '', status: '', id: 0 }]);
  const [isLoaded, setLoaded] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setDefVal(event.target.value);
    localStorage.setItem('searchString', event.target.value);
    changeSortedPosts();
  }

  useEffect(() => {
    changeSortedPosts();
  }, []);

  function changeSortedPosts() {
    fetch(`https://rickandmortyapi.com/api/character/?name=${localStorage.getItem('searchString')}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setSortedPosts(resp.results);
        setLoaded(true);
      });
  }

  return (
    <div>
      <SearchForm data-testid="search-input" def={defValue} onChange={handleChange} />
      <div>
        {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <div className="card-list">
            {sortedPosts?.map((post) => (
              <CardItem
                image={post.image}
                title={post.name}
                body={`Status: ${post.status}`}
                key={post.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardsList;
