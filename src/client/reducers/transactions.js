import {
  TRANSACTION_START,
  TRANSACTION_SUCCESS,
  TRANSACTION_FAIL
} from "../actionTypes";

const initialState = {
  info: {},
  error: null,
  loading: false
};

const authStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    info: action.info,
    error: null,
    loading: false
  };
};

const authFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    info: action.info,
    loading: false
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTION_START:
      return authStart(state, action);
    case TRANSACTION_SUCCESS:
      return authSuccess(state, action);
    case TRANSACTION_FAIL:
      return authFail(state, action);
    default:
      return state;
  }
};

export default reducer;
