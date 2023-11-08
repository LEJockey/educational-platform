import React from 'react';
import classes from './MainBtn.module.css';
function MainBtn({ children, shadow }) {
  let style = {};
  if (shadow) {
    style = { boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' };
  }

  return (
    <button
      style={style}
      className={classes.mainBtn}
    >
      {children}
    </button>
  );
}

export default MainBtn;
