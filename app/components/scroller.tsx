import * as React from 'react';

const scroller: React.SFC<{ onScroll: (e: any) => any }> = ({ onScroll }) => (
  <div
    style={{
      padding: '5px',
      border: 'solid 1px black',
      margin: '10px',
    }}
    onWheel={e => onScroll(e)}
  >
    <div>Scroll me </div>
  </div>
);

export default scroller;
