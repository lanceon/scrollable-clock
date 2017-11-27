import * as React from 'react';

const bgColor = 'white';
const strokeColor = 'black';

interface Props {
  x: number;
  y: number;
  r: number;
  stroke: number;
}
const clockFrame: React.SFC<Props> = ({ x, y, r, stroke }) => (
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
