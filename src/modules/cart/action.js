export const IS_PRODUCT_CART_LOADING = 'IS_PRODUCT_CART_LOADING';
export const IS_PRODUCT_CART_SUCCESS = 'IS_PRODUCT_CART_SUCCESS';
export const IS_PRODUCT_CART_FAIL = 'IS_PRODUCT_CART_FAIL';

export const isProductCartLoading = () => ({ type: IS_PRODUCT_CART_LOADING });
export const isProductCartSuccess = (cartProducts) => ({
  type: IS_PRODUCT_CART_SUCCESS,
  cartProducts,
});
export const isProductCartFail = () => ({ type: IS_PRODUCT_CART_FAIL });
