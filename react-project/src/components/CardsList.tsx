import React, { useState, ChangeEvent, useEffect, FormEventHandler } from 'react';
import CardItem from './CardItem';
import SearchForm from './UI/input/SearchForm';
import { ModalContext } from '../contexts/modalContext';
import { useContext } from 'react';
import cl from '../styles/MainOpen.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeSearchAction } from '../redux/searchText';
import { changeSearchResultAction } from '../redux/searchResult';
import { rickApi } from '../redux/fetch/rickApi';
import { cardInt } from '../interfaces/cardInterface';

const CardsList = () => {
  const dispatch = useDispatch();
  const defValue = useSelector(
    (state: { searchText: { search: string } }) => state.searchText.search
  );
  const [searchValue, changeSearchValue] = useState(defValue);
  const [needableId, changeNeedableId] = useState(1);
  const posts = useSelector(
    (state: { searchResult: { searchResult: { results: cardInt[] } } }) =>
      state.searchResult.searchResult
  );
  const { data: fetchPosts } = rickApi.useFetchAllPostsQuery(defValue); //here
  const { data: modalInfo } = rickApi.useFetchOnePostQuery(needableId);
  // const [sortedPosts, setSortedPosts] = useState([{ image: '', name: '', status: '', id: 0 }]);
  const [isLoaded, setLoaded] = useState(false);
  const [isModalLoaded, setModalLoaded] = useState(false);
  // const [modalInfo, setModalInfo] = useState({
  //   image: '',
  //   name: '',
  //   status: '',
  //   species: '',
  //   gender: '',
  // });
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);

  useEffect(() => {
    dispatch(changeSearchResultAction(fetchPosts));
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    changeSearchValue(event.target.value);
  }

  function sumbitValue() {
    setLoaded(false);
    dispatch(changeSearchAction(searchValue));
    setTimeout(() => {
      setLoaded(true);
    }, 500);
    // todo
  }

  function changeModalInfo(id: number) {
    // setModalLoaded(false);
    changeNeedableId(id);
    setModalLoaded(true);
    //   fetch(`https://rickandmortyapi.com/api/character/${1}`)
    //     .then((resp) => resp.json())
    //     .then((resp) => {
    //       // setModalInfo(resp);

    //     });
  }

  useEffect(() => {
    // dispatch(changeSearchResultAction(fetchPosts));
    sumbitValue();
  }, []);

  // function changeSortedPosts() {
  //   setLoaded(false);
  //   fetch(`https://rickandmortyapi.com/api/character/?name=${defValue}`)
  //     .then((resp) => resp.json())
  //     .then((resp) => {
  //       setSortedPosts(resp.results);
  //       setLoaded(true);
  //     });
  // }

  return (
    <div>
      <SearchForm
        def={String(searchValue)}
        onChange={handleChange}
        onSubmit={
          ((e: SubmitEvent) => {
            e.preventDefault();
            sumbitValue();
          }) as unknown as FormEventHandler
        }
      />
      <div>
        {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <div className="card-list">
            {posts &&
              posts?.results?.map((post: cardInt) => (
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
        )}
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
