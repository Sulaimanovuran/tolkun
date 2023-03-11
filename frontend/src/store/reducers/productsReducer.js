import {
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCTS_FAILURE, DELETE_PRODUCTS_REQUEST, DELETE_PRODUCTS_SUCCESS,
    FETCH_ALL_PRODUCTS_FAILURE,
    FETCH_ALL_PRODUCTS_REQUEST,
    FETCH_ALL_PRODUCTS_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS

} from "../actions/productsActions";

const initialState = {
    allProducts: [],
    product: [],
    loading: false,
    error: null,
    addLoading: false,
    addError: null
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_ALL_PRODUCTS_SUCCESS:
            return {...state, loading: false, allProducts: action.payload};
        case FETCH_ALL_PRODUCTS_FAILURE:
            return {...state, loading: false, error: action.payload};

        case FETCH_PRODUCT_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_PRODUCT_SUCCESS:
            return {...state, loading: false, product: action.payload};
        case FETCH_PRODUCT_FAILURE:
            return {...state, loading: false, error: action.payload};

        case ADD_PRODUCT_REQUEST:
            return {...state, addError: null, addLoading: true};
        case ADD_PRODUCT_SUCCESS:
            return {...state, addLoading: false};
        case ADD_PRODUCT_FAILURE:
            return {...state, addError: action.payload, addLoading: false};

        case DELETE_PRODUCTS_REQUEST:
            return {...state, error: null, loading: true};
        case DELETE_PRODUCTS_SUCCESS:
            return {...state, loading: false};
        case DELETE_PRODUCTS_FAILURE:
            return {...state, error: action.payload, loading: false};
        default:
            return state;
    }
};

export default productsReducer;