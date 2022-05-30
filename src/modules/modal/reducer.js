import {
  IS_ALREADY_IN_CART_MODAL_SHOW,
  IS_ADD_CART_MODAL_SHOW,
  IS_ADD_CART_ERROR_MODAL_SHOW,
  IS_DELETE_PRODUCT_CART_ERROR_MODAL_SHOW,
  IS_PRODUCT_COUNT_UP_ERROR_MODAL_SHOW,
  IS_CART_PRODUCT_MAX_COUNT_MODAL_SHOW,
  IS_MODAL_CLOSE,
} from './action';

const initialState = {
  isAlreadyInCartModalShow: false,
  isAddCartModalShow: false,
  isAddCartErrorModalShow: false,
  isDeleteProductCartErrorModalShow: false,
  isProductCountUpErrorModalShow: false,
  isCartProductMaxCountModalShow: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case IS_ALREADY_IN_CART_MODAL_SHOW:
      return {
        ...state,
        isAlreadyInCartModalShow: true,
      };
    case IS_ADD_CART_MODAL_SHOW:
      return {
        ...state,
        isAddCartModalShow: true,
      };
    case IS_ADD_CART_ERROR_MODAL_SHOW:
      return {
        ...state,
        isAddCartErrorModalShow: true,
      };
    case IS_DELETE_PRODUCT_CART_ERROR_MODAL_SHOW:
      return {
        ...state,
        isDeleteProductCartErrorModalShow: true,
      };
    case IS_PRODUCT_COUNT_UP_ERROR_MODAL_SHOW:
      return {
        ...state,
        isProductCountUpErrorModalShow: true,
      };
    case IS_CART_PRODUCT_MAX_COUNT_MODAL_SHOW:
      return {
        ...state,
        isCartProductMaxCountModalShow: true,
      };
    case IS_MODAL_CLOSE:
      return {
        ...state,
        isAlreadyInCartModalShow: false,
        isAddCartModalShow: false,
        isAddCartErrorModalShow: false,
        isDeleteProductCartErrorModalShow: false,
        isProductCountUpErrorModalShow: false,
        isCartProductMaxCountModalShow: false,
      };
    default:
      return state;
  }
};

export default modal;
