import {
  IS_PRODUCT_LOADING,
  IS_PRODUCT_SUCCESS,
  isProductFail,
  IS_DETAIL_PRODUCT_LOADING,
  IS_DETAIL_PRODUCT_SUCCESS,
  IS_DETAIL_PRODUCT_FAIL,
} from './action';

const initialState = {
  products: [],
  isProductLoading: false,
  isProductSuccess: false,
  isProductFail: '',
  detailProduct: '',
  isDetailProductLoading: false,
  isDetailProductSuccess: false,
  isDetailProductFail: '',
};

function product(state = initialState, action) {
  switch (action.type) {
    case IS_PRODUCT_LOADING:
      return {
        ...state,
        isProductLoading: true,
        isProductSuccess: false,
        isProductFail: '',
      };
    case IS_PRODUCT_SUCCESS:
      return {
        ...state,
        isProductLoading: false,
        isProductSuccess: true,
        isProductFail: '',
        products: [...state.products, ...action.products],
      };
    case isProductFail:
      return {
        ...state,
        isProductLoading: false,
        isProductSuccess: false,
        isProductFail: action.error,
      };
    case IS_DETAIL_PRODUCT_LOADING:
      return {
        ...state,
        isDetailProductLoading: true,
        isDetailProductSuccess: false,
        isDetailProductFail: '',
      };
    case IS_DETAIL_PRODUCT_SUCCESS:
      return {
        ...state,
        isDetailProductLoading: false,
        isDetailProductSuccess: true,
        detailProduct: action.detailProduct,
        isDetailProductFail: '',
      };
    case IS_DETAIL_PRODUCT_FAIL:
      return {
        ...state,
        isDetailProductLoading: false,
        isDetailProductSuccess: false,
        isDetailProductFail: action.error,
      };
    default:
      return state;
  }
}

export default product;
