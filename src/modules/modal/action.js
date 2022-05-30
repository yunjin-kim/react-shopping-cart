export const IS_ALREADY_IN_CART_MODAL_SHOW = 'IS_ALREADY_IN_CART_MODAL_SHOW';
export const IS_ADD_CART_MODAL_SHOW = 'IS_ADD_CART_MODAL_SHOW';
export const IS_ADD_CART_ERROR_MODAL_SHOW = 'IS_ADD_CART_ERROR_MODAL_SHOW';
export const IS_DELETE_PRODUCT_CART_ERROR_MODAL_SHOW = 'IS_DELETE_PRODUCT_CART_ERROR_MODAL_SHOW';
export const IS_PRODUCT_COUNT_UP_ERROR_MODAL_SHOW = 'IS_PRODUCT_COUNT_UP_ERROR_MODAL_SHOW';
export const IS_CART_PRODUCT_MAX_COUNT_MODAL_SHOW = 'IS_CART_PRODUCT_MAX_COUNT_MODAL_SHOW';
export const IS_MODAL_CLOSE = 'IS_MODAL_CLOSE';

export const isAlreadyInCartModalShow = () => ({ type: IS_ALREADY_IN_CART_MODAL_SHOW });
export const isAddCartModalShow = () => ({ type: IS_ADD_CART_MODAL_SHOW });
export const isAddCartErrorModalShow = () => ({ type: IS_ADD_CART_ERROR_MODAL_SHOW });
export const isDeleteProductCartErrorModalShow = () => ({
  type: IS_DELETE_PRODUCT_CART_ERROR_MODAL_SHOW,
});
export const isProductCountUpErrorModalShow = () => ({
  type: IS_PRODUCT_COUNT_UP_ERROR_MODAL_SHOW,
});
export const isCartProductMaxCountModalShow = () => ({
  type: IS_CART_PRODUCT_MAX_COUNT_MODAL_SHOW,
});
export const isModalClose = () => ({ type: IS_MODAL_CLOSE });
