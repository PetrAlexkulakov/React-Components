import React, { ChangeEventHandler, MouseEventHandler, useState, useRef } from 'react';
import Header from '../components/Header';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import CardItem from '../components/CardItem';
import { BaseSyntheticEvent } from 'react';

type MyState = {
  body?: string;
  title?: string;
  key?: string;
  city?: string;
  accept?: string;
  switch?: string;
  image?: string;
}[];

const Forms = () => {
  const [posts, setPosts] = useState<MyState>([]);
  let thisForm: HTMLFormElement | null = null;
  const formName = useRef<HTMLInputElement | null>(null);
  const formDate = useRef<HTMLInputElement | null>(null);
  let formCity = 'Moscow';
  const formAccept = useRef<HTMLInputElement | null>(null);
  let formSwitch = 'First';
  const formFile = useRef<HTMLInputElement | null>(null);

  const addNewCard = (e: MouseEvent) => {
    e.preventDefault();
    if (validForm() && confirm('Are u sure?')) {
      setPosts([
        ...posts,
        {
          key: String(new Date()),
          title: formDate.current?.value,
          body: formName.current?.value,
          city: formCity,
          switch: formSwitch,
          image: URL.createObjectURL(formFile.current!.files![0]),
        },
      ]);
      formSwitch = 'First';
      clearForm();
    }
  };

  function clearForm() {
    thisForm?.reset();
  }

  function selectChange(e: BaseSyntheticEvent) {
    formCity = String(e.target.value);
  }

  function validForm() {
    formDate.current!.style.backgroundColor = '';
    formName.current!.style.backgroundColor = '';
    formFile.current!.style.backgroundColor = '';

    if (formDate.current?.value === '') {
      formDate.current.style.backgroundColor = 'red';
    }
    if (formName.current?.value === '') {
      formName.current.style.backgroundColor = 'red';
    }
    if (formFile.current!.files![0] == null) {
      formFile.current!.style.backgroundColor = 'red';
    }
    if (formAccept.current?.checked === false) {
      alert('You should accept personal data!');
    }

    if (
      formDate.current?.value === '' ||
      formName.current?.value === '' ||
      formFile.current!.files![0] == null ||
      formAccept.current?.checked === false
    ) {
      return false;
    }
    return true;
  }

  return (
    <div>
      <Header title="Forms" />
      <form className="form-wrapper" ref={(form) => (thisForm = form)}>
        <div>
          Text: <MyInput ref={formName} type="text" placeholder="Text" />
        </div>
        <div>
          Date: <MyInput ref={formDate} type="date" placeholder="Date" />
        </div>
        <div>
          City:
          <select onChange={selectChange as unknown as ChangeEventHandler<HTMLSelectElement>}>
            <option value="Moscow">Moscow</option>
            <option value="New York">New York</option>
            <option value="Another">Another</option>
          </select>
        </div>
        <div>
          <MyInput ref={formAccept} type="checkbox" /> I consent to my personal data
        </div>
        <div>
          <MyInput
            onClick={() => (formSwitch = 'First')}
            type="radio"
            name="number"
            defaultChecked
          />{' '}
          First <MyInput onClick={() => (formSwitch = 'Second')} type="radio" name="number" />{' '}
          Second
        </div>
        <MyInput ref={formFile} type="file" />
        <MyButton
          data-testid="btn-add"
          onClick={addNewCard as unknown as MouseEventHandler<HTMLButtonElement>}
        >
          Create Card
        </MyButton>
      </form>
      <div className="card-list">
        {posts.map((post) => (
          <CardItem data-testid="card" {...post} image={post.image} key={post.key} />
        ))}
      </div>
    </div>
  );
};

export default Forms;
