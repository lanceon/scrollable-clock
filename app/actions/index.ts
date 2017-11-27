import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('general');
export const userScrolls = actionCreator<number>('USER_SCROLLS');
