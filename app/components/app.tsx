import * as React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { userScrolls } from '../actions';
import Scroller from './scroller';
import Circle from './circle';
import ClockFrame from './clock-frame';
import { RootReducerShape, rootReducer } from '../reducers';

const stroke = 2;
const rCalc = (w, h) => Math.min(w, h) / 2;

export interface Props {
  width: number;
  height: number;
  circles: any;
  scroll: (event: Event, id: number) => any;
}
const App: React.SFC<Props> = ({ width, height, circles, scroll }) => (
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
const getMap = createSelector<RootReducerShape, any, any>(
  state => state.positions.byId,
  obj => Object.keys(obj).map(k => obj[k])
);
const mapStateToProps = (state: RootReducerShape) => ({
  circles: getMap(state),
  width: 200,
  height: 200,
});
const mapDispatchToProps = dispatch => ({
  scroll: (e, id) => {
    e.preventDefault();
    dispatch(userScrolls(id));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
