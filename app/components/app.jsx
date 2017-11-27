import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import actions from '../actions';
import Scroller from './scroller';
import Circle from './circle';
import ClockFrame from './clock-frame';

const stroke = 2;
const rCalc = (w, h) => Math.min(w, h) / 2;

const App = ({ width, height, circles, scroll }) => (
  <section style={{ margin: '50px' }}>
    <svg width={width + 20} height={height + 20}>
      <g transform="translate(10 10)">
        <ClockFrame
          x={width / 2}
          y={height / 2}
          r={rCalc(width, height) - stroke}
          stroke={stroke}
        />
        {circles.map(c => (
          <Circle circle={c} frameR={rCalc(width, height)} key={c.id} />
        ))}
      </g>
    </svg>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {circles.map(c => (
        <Scroller key={c.id} onScroll={e => scroll(e, c.id)} />
      ))}
    </div>
  </section>
);
const getMap = createSelector(
  state => state.positions.byId,
  obj => Object.keys(obj).map(k => obj[k])
);
const mapStateToProps = state => ({
  circles: getMap(state),
  width: 200,
  height: 200,
});
const mapDispatchToProps = dispatch => ({
  scroll: (e, id) => {
    e.preventDefault();
    dispatch({ type: actions.SCROLL, payload: id });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
