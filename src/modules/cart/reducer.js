import { IS_PRODUCT_CART_LOADING, IS_PRODUCT_CART_SUCCESS, IS_PRODUCT_CART_FAIL } from './action';

const initialState = {
  cartProducts: [],
  isProductCartLoading: false,
  isProductCartSuccess: false,
  isProductCartFail: '',
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case IS_PRODUCT_CART_LOADING:
      return {
        ...state,
        isProductCartLoading: true,
        isProductCartSuccess: false,
        isProductCartFail: '',
      };
    case IS_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        isProductCartLoading: false,
        isProductCartSuccess: true,
        isProductCartFail: '',
        cartProducts: [...action.cartProducts],
      };
    case IS_PRODUCT_CART_FAIL:
      return {
        ...state,
        isProductCartLoading: false,
        isProductCartSuccess: false,
        isProductCartFail: action.type,
      };
    default:
      return state;
  }
};

export default cart;
