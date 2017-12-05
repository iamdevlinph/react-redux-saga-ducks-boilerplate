/**
 * General COMMON State
 */

export const types = {
  ADD_REQUEST: 'COUNTER/ADD_REQUEST',
  ADD_SUCCESS: 'COUNTER/ADD_SUCCESS',
  MINUS_REQUEST: 'COUNTER/MINUS_REQUEST',
  MINUS_SUCCESS: 'COUTER/MINUS_SUCCESS',
};

export const initialState = {
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_SUCCESS:
      return { ...state, total: state.total + action.payload };
    case types.MINUS_SUCCESS:
      return { ...state, total: state.total - action.payload };
    default:
      return state;
  }
};

export const actions = {
  add: toAdd => ({ type: types.ADD_REQUEST, toAdd }),
  minus: toMinus => ({ type: types.MINUS_REQUEST, toMinus }),
};
