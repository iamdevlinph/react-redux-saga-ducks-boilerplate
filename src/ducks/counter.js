/**
 * General COMMON State
 */

export const types = {
  INCREASE_REQUEST: 'COUNTER/INCREASE_REQUEST',
  INCREASE_SUCCESS: 'COUNTER/INCREASE_SUCCESS',
  DECREASE_REQUEST: 'COUNTER/DECREASE_REQUEST',
  DECREASE_SUCCESS: 'COUTER/DECREASE_SUCCESS',
};

export const initialState = {
  total: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE_SUCCESS:
      return { ...state, total: state.total + 1 };
    case types.DECREASE_SUCCESS:
      return { ...state, total: state.total - 1 };
    default:
      return state;
  }
};

export const actions = {
  counterIncrease: () => ({ type: types.INCREASE_REQUEST }),
  counterDecrease: () => ({ type: types.DECREASE_REQUEST }),
};
