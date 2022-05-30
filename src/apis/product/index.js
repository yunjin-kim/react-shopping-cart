import axios from 'axios';

import {
  isProductSuccess,
  isProductFail,
  isDetailProductSuccess,
  isDetailProductFail,
} from 'modules/product';

export const getProductList = () => async (dispatch) => {
  try {
    const response = await axios.get('/mocking/products');
    const products = await response.data;

    dispatch(isProductSuccess(products));
  } catch (error) {
    dispatch(isProductFail(error));
  }
};

export const getDetailProduct = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/mocking/products/${id}`);
    const detailProduct = await response.data;

    dispatch(isDetailProductSuccess(detailProduct));
  } catch (error) {
    dispatch(isDetailProductFail(error));
  }
};
