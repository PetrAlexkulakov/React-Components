import React, { MouseEventHandler, RefObject } from 'react';
import Header from '../components/Header';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';

const Forms = () => {
  const name = React.createRef() as RefObject<HTMLInputElement>;
  const addNewCard = (e: MouseEvent) => {
    e.preventDefault();
    console.log(name.current?.value);
  };

  return (
    <div>
      <Header title="Forms" />
      <form>
        Text: <MyInput ref={name} type="text" placeholder="Название" />
        <MyButton onClick={addNewCard as unknown as MouseEventHandler<HTMLButtonElement>}>
          Create Card
        </MyButton>
      </form>
    </div>
  );
};

export default Forms;
