import { combineReducers } from 'redux';
import { reducer as positions, PositionsStateShape } from './positions';

export interface RootReducerShape {
  positions: PositionsStateShape;
}
export const rootReducer = combineReducers<RootReducerShape>({
  positions,
});
