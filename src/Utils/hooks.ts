import { useReducer } from 'react';

const stateReducer = (oldState: any, newState: any) => ({
  ...oldState,
  ...newState,
});

export const useStateReducer = <T>(state: T) =>
  useReducer<React.Reducer<T, T>>(stateReducer, state);
