import React, { MouseEventHandler } from 'react';
import classes from './MyButton.module.css';

const MyButton = (props: {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}) => {
  return (
    <button {...props} className={classes.myBtn}>
      {props.children}
    </button>
  );
};

export default MyButton;
