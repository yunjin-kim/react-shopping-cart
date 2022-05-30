export const IS_PRODUCT_LOADING = 'IS_PRODUCT_LOADING';
export const IS_PRODUCT_SUCCESS = 'IS_PRODUCT_SUCCESS';
export const IS_PRODUCT_FAIL = 'IS_PRODUCT_FAIL';

export const IS_DETAIL_PRODUCT_LOADING = 'IS_DETAIL_PRODUCT_LOADING';
export const IS_DETAIL_PRODUCT_SUCCESS = 'IS_DETAIL_PRODUCT_SUCCESS';
export const IS_DETAIL_PRODUCT_FAIL = 'IS_DETAIL_PRODUCT_FAIL';

export const isProductLoading = () => ({ type: IS_PRODUCT_LOADING });
export const isProductSuccess = (products) => ({ type: IS_PRODUCT_SUCCESS, products });
export const isProductFail = (error) => ({ type: IS_PRODUCT_FAIL, error });

export const isDetailProductLoading = () => ({ type: IS_DETAIL_PRODUCT_LOADING });
export const isDetailProductSuccess = (detailProduct) => ({
  type: IS_DETAIL_PRODUCT_SUCCESS,
  detailProduct,
});
export const isDetailProductFail = () => ({ type: IS_DETAIL_PRODUCT_FAIL });
