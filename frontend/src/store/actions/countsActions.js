import axiosApi from "../../axiosApi";

export const FETCH_COUNTS_REQUEST = 'FETCH_COUNTS_REQUEST';
export const FETCH_COUNTS_SUCCESS = 'FETCH_COUNTS_SUCCESS';
export const FETCH_COUNTS_FAILURE = 'FETCH_COUNTS_FAILURE';

const fetchCountsRequest = () => ({type: FETCH_COUNTS_REQUEST});
const fetchCountsSuccess = counts => ({type: FETCH_COUNTS_SUCCESS, payload: counts});
const fetchCountsFailure = error => ({type: FETCH_COUNTS_FAILURE, payload: error});

export const fetchCounts = () => {
  return async dispatch => {
    try {
      dispatch(fetchCountsRequest());

      const response = await axiosApi('/product/api/count_list/');
      console.log(response);
      dispatch(fetchCountsSuccess(response.data));
    } catch (e) {
      dispatch(fetchCountsFailure(e.message));
    }
  };
};