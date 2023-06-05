import React from 'react';
import classes from './Loading.module.scss';

function Loading() {
  return (
    <h1 className={classes.loading}>
      Loading<span className={classes.dot + ' ' + classes.dot1}>.</span>
      <span className={classes.dot + ' ' + classes.dot2}>.</span>
      <span className={classes.dot + ' ' + classes.dot3}>.</span>
    </h1>
  );
}

export default Loading;
