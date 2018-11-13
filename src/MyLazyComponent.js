import React, { Component, memo } from 'react';
import { Img } from 'the-platform';

import './App.css';

function MyLazyComponent(props) {
  return (
    <div>
      <h1>{ props.title }</h1>
      <Img src={props.img} alt={props.title} />
    </div>
  );
}

export default memo(MyLazyComponent);