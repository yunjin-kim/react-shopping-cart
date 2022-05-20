export const GET_PRODUCT_CART_LOADING = 'GET_PRODUCT_CART_LOADING';
export const GET_PRODUCT_CART_SUCCESS = 'GET_PRODUCT_CART_SUCCESS';
export const GET_PRODUCT_CART_FAIL = 'GET_PRODUCT_CART_FAIL';

export const GET_CHECK_TOTAL_CART_PRODUCT = 'CHECK_TOTAL_CART_PRODUCT';

export const getProductCartLoading = () => ({ type: GET_PRODUCT_CART_LOADING });
export const getProductCartSuccess = (cartProducts) => ({
  type: GET_PRODUCT_CART_SUCCESS,
  cartProducts,
});
export const getProductCartFail = () => ({ type: GET_PRODUCT_CART_FAIL });

export const getCheckTotalCartProduct = (check) => ({ type: GET_CHECK_TOTAL_CART_PRODUCT, check });
