import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef<HTMLInputElement, { type: string; placeholder: string }>(
  (props: { type: string; placeholder: string }, ref) => {
    return <input ref={ref} className={classes.MyInput} {...props} />;
  }
);

export default MyInput;
