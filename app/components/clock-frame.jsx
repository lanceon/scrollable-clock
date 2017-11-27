import React from 'react';

const bgColor = 'white';
const strokeColor = 'black';

const clockFrame = ({ x, y, r, stroke }) => (
  <g>
    <circle
      cx={x}
      cy={y}
      r={r}
      style={{
        fill: bgColor,
        stroke: strokeColor,
        strokeWidth: stroke,
      }}
    />
  </g>
);

export default clockFrame;
