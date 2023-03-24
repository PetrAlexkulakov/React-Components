import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef<
  HTMLInputElement,
  { type: string; placeholder?: string; name?: string; checked?: boolean; onClick?: () => void }
>((props: { type: string; placeholder?: string }, ref) => {
  return <input ref={ref} className={classes.MyInput} {...props} />;
});

export default MyInput;
