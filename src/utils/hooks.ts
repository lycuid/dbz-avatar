import { useReducer } from 'react';

const stateReducer = (oldState: any, newState: any) => ({
  ...oldState, ...newState
});

export const useStateReducer = (state: any) => useReducer(stateReducer, state);
