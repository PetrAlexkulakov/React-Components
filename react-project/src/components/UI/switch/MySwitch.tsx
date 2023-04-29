import React from 'react';
import classes from './MySwitch.module.css';

const MySwitch = React.forwardRef<HTMLInputElement>((props: Record<string, never>, ref) => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" ref={ref} />
      <span className={classes.slider}></span>
    </label>
  );
});

export default MySwitch;
