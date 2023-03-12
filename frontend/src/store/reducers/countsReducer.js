import {FETCH_COUNTS_FAILURE, FETCH_COUNTS_REQUEST, FETCH_COUNTS_SUCCESS} from "../actions/countsActions";

const initialState = {
  counts: null,
  loading: false,
  error: null
};

const countsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTS_REQUEST:
      return {...state, loading: true, error: null};
    case FETCH_COUNTS_SUCCESS:
      return {...state, loading: false, counts: action.payload};
    case FETCH_COUNTS_FAILURE:
      return {...state, loading: false, error: action.payload};

    default:
      return state;
  }
};

export default countsReducer;