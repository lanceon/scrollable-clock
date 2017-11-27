import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { userScrolls } from '../actions';

interface RoundRunnerState {
  id: number;
  position: number;
  speed: number;
}
interface PositionsStateShape {
  byId: {
    [id: number]: RoundRunnerState;
  };
  latestId: number;
}

const initialState = {
  byId: {
    0: {
      id: 0,
      position: 0,
      speed: 1,
    },
    1: {
      id: 1,
      position: 15,
      speed: 5,
    },
    2: {
      id: 2,
      position: 10,
      speed: 10,
    },
  },
  latestId: 2,
};

export const reducer = reducerWithInitialState(initialState).case(
  userScrolls,
  (state, payload) => ({
    ...state,
    byId: {
      ...state.byId,
      [payload]: {
        ...state.byId[payload],
        position: state.byId[payload].position + state.byId[payload].speed,
      },
    },
  })
);

export const selectors = {
  getCirclePosition: (r: number, position: number) => ({
    x: r * Math.cos(Math.PI * position / 60) + r,
    y: r * Math.sin(Math.PI * position / 60) + r,
  }),
};
