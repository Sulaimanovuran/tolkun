import axiosApi from "../../axiosApi";
import {historyReplace} from "./historyActions";
import {useToastSuccess} from "../../toastHooks";

export const FETCH_ALL_PRODUCTS_REQUEST = 'FETCH_ALL_PRODUCTS_REQUEST';
export const FETCH_ALL_PRODUCTS_SUCCESS = 'FETCH_ALL_PRODUCTS_SUCCESS';
export const FETCH_ALL_PRODUCTS_FAILURE = 'FETCH_ALL_PRODUCTS_FAILURE';

export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

export const ADD_PRODUCT_REQUEST = 'ADD_PRODUCT_REQUEST';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';

export const EDIT_PRODUCT_REQUEST = 'EDIT_PRODUCT_REQUEST';
export const EDIT_PRODUCT_SUCCESS = 'EDIT_PRODUCT_SUCCESS';
export const EDIT_PRODUCT_FAILURE = 'EDIT_PRODUCT_FAILURE';

export const DELETE_PRODUCTS_REQUEST = 'DELETE_PRODUCTS_REQUEST';
export const DELETE_PRODUCTS_SUCCESS = 'DELETE_PRODUCTS_SUCCESS';
export const DELETE_PRODUCTS_FAILURE = 'DELETE_PRODUCTS_FAILURE';

export const CLEAR_PRODUCTS_ERRORS = 'CLEAR_PRODUCTS_ERRORS';

const fetchAllProductsRequest = () => ({type: FETCH_ALL_PRODUCTS_REQUEST});
const fetchAllProductsSuccess = products => ({type: FETCH_ALL_PRODUCTS_SUCCESS, payload: products});
const fetchAllProductsFailure = error => ({type: FETCH_ALL_PRODUCTS_FAILURE, payload: error});

const fetchProductRequest = () => ({type: FETCH_PRODUCT_REQUEST});
const fetchProductSuccess = albums => ({type: FETCH_PRODUCT_SUCCESS, payload: albums});
const fetchProductFailure = error => ({type: FETCH_PRODUCT_FAILURE, payload: error});

const addProductRequest = () => ({type: ADD_PRODUCT_REQUEST});
const addProductSuccess = () => ({type: ADD_PRODUCT_SUCCESS});
const addProductFailure = error => ({type: ADD_PRODUCT_FAILURE, payload: error});

const editProductRequest = () => ({type: EDIT_PRODUCT_REQUEST});
const editProductSuccess = () => ({type: EDIT_PRODUCT_SUCCESS});
const editProductFailure = error => ({type: EDIT_PRODUCT_FAILURE, payload: error});

const deleteProductsRequest = () => ({type: DELETE_PRODUCTS_REQUEST});
const deleteProductsSuccess = () => ({type: DELETE_PRODUCTS_SUCCESS});
const deleteProductsFailure = error => ({type: DELETE_PRODUCTS_FAILURE, payload: error});

export const clearProductsErrors = () => ({type: CLEAR_PRODUCTS_ERRORS});

export const fetchAllProducts = () => {
    return async dispatch => {
        try {
            dispatch(fetchAllProductsRequest());

            const response = await axiosApi('/product/api');
            console.log(response);
            dispatch(fetchAllProductsSuccess(response.data));
        } catch (e) {
            dispatch(fetchAllProductsFailure(e.message));
        }
    };
};

export const fetchProduct = id => {
    return async dispatch => {
        try {
            dispatch(fetchProductRequest());

            const response = await axiosApi('/product/api/' + id);
            dispatch(fetchProductSuccess(response.data));
        } catch (e) {
            dispatch(fetchProductFailure(e.message));
        }
    };
};

export const addProduct = data => {
    return async dispatch => {
        try{
            dispatch(addProductRequest());

            await axiosApi.post('/product/api/', data);
            console.log(data);
            dispatch(addProductSuccess());
            dispatch(historyReplace('/'));
            useToastSuccess('Продукт удачно добавлен!');
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(addProductFailure(e.response.data));
            } else {
                dispatch(addProductFailure({global: 'Проверьте интернет'}));
            }
            throw e;
        }
    };
};

export const editProduct = data => {
    return async dispatch => {
        try{
            dispatch(editProductRequest());

            await axiosApi.put('/product/api/', data);
            dispatch(editProductSuccess());
            dispatch(historyReplace('/'));
            useToastSuccess('Продукт удачно изменен!');
        } catch (e) {
            if (e.response && e.response.data) {
                dispatch(editProductFailure(e.response.data));
            } else {
                dispatch(editProductFailure({global: 'Проверьте интернет'}));
            }
            throw e;
        }
    };
};

export const deleteProduct = id => {
    return async dispatch => {
        try{
            dispatch(deleteProductsRequest());

            await axiosApi.delete('/product/api/' + id);
            dispatch(deleteProductsSuccess());
            useToastSuccess('Продукт удален успешно!');
        } catch (e) {
            dispatch(deleteProductsFailure(e.message));
        }
    };
};