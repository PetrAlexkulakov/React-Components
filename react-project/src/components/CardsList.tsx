import React, { useState, ChangeEvent, useEffect, FormEventHandler } from 'react';
import CardItem from './CardItem';
import SearchForm from './UI/input/SearchForm';
import { ModalContext } from '../contexts/modalContext';
import { useContext } from 'react';
import cl from '../styles/MainOpen.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeSearchAction } from '../redux/searchText';
import { rickApi } from '../redux/fetch/rickApi';

const CardsList = () => {
  const dispatch = useDispatch();
  const defValue = useSelector(
    (state: { searchText: { search: string } }) => state.searchText.search
  );
  const { data: posts } = rickApi.useFetchAllPostsQuery('');
  const [sortedPosts, setSortedPosts] = useState([{ image: '', name: '', status: '', id: 0 }]);
  const [isLoaded, setLoaded] = useState(false);
  const [isModalLoaded, setModalLoaded] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    image: '',
    name: '',
    status: '',
    species: '',
    gender: '',
  });
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(changeSearchAction(event.target.value));
  }

  function changeModalInfo(id: number) {
    setModalLoaded(false);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setModalInfo(resp);
        setModalLoaded(true);
      });
  }

  useEffect(() => {
    changeSortedPosts();
  }, []);

  function changeSortedPosts() {
    setLoaded(false);
    fetch(`https://rickandmortyapi.com/api/character/?name=${defValue}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setSortedPosts(resp.results);
        setLoaded(true);
      });
  }

  return (
    <div>
      <SearchForm
        def={String(defValue)}
        onChange={handleChange}
        onSubmit={
          ((e: SubmitEvent) => {
            e.preventDefault();
            changeSortedPosts();
          }) as unknown as FormEventHandler
        }
      />
      <div>
        {posts &&
          posts.results.map((post: { name: string; id: number; status: string; image: string }) => (
            <CardItem
              image={post.image}
              title={post.name}
              body={`Status: ${post.status}`}
              key={post.id}
              onClick={() => {
                openModal();
                changeModalInfo(post.id);
              }}
            />
          ))}
        {/* {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <div className="card-list">
            {sortedPosts?.map((post) => (
              <CardItem
                image={post.image}
                title={post.name}
                body={`Status: ${post.status}`}
                key={post.id}
                onClick={() => {
                  openModal();
                  changeModalInfo(post.id);
                }}
              />
            ))}
          </div>
        )} */}
      </div>
      {isModalOpen &&
        (!isModalLoaded ? (
          <div className={cl['modal-loading']}>Loading...</div>
        ) : (
          <div className={cl.modal}>
            <div className={cl['modal-overlay']} onClick={closeModal}>
              <div className={cl['modal-content']} onClick={(e) => e.stopPropagation()}>
                <span className={cl['modal-close-btn']} onClick={closeModal}>
                  &times;
                </span>
                <div className={cl['modal-title']}>{modalInfo.name}</div>
                <div className={cl['modal-body']}>
                  <img className="card__image" src={modalInfo.image}></img>
                  <p>Status: {modalInfo.status}</p>
                  <p>Species: {modalInfo.species}</p>
                  <p>Gender: {modalInfo.gender}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardsList;
