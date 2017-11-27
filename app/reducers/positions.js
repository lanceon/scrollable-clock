import R from 'ramda';
import actions from '../actions';

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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SCROLL:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload]: {
            ...state.byId[action.payload],
            position:
              state.byId[action.payload].position +
              state.byId[action.payload].speed,
          },
        },
      };
    default:
      return state;
  }
};

export const selectors = {
  getCirclePosition: (r, position) => ({
    x: r * Math.cos(Math.PI * position / 60) + r,
    y: r * Math.sin(Math.PI * position / 60) + r,
  }),
};
