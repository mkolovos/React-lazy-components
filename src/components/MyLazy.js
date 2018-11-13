import React, { memo } from 'react';
import { Img } from 'the-platform';

function MyLazy(props) {
  return (
    <div>
      <h1>{ props.title }</h1>
      <Img src={props.img} alt={props.title} />
    </div>
  );
}

export default memo(MyLazy);