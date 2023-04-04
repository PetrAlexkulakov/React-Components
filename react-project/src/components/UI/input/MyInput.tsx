import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef<
  HTMLInputElement,
  {
    type: string;
    placeholder?: string;
    name?: string;
    defaultChecked?: boolean;
    onClick?: () => void;
    value?: string;
  }
>((props: { type: string; placeholder?: string }, ref) => {
  return <input ref={ref} className={classes.myInput} {...props} />;
});

export default MyInput;
