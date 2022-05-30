import axios from 'axios';

import { isProductCartSuccess, isProductCartFail } from 'modules/cart';

import {
  isAddCartErrorModalShow,
  isAddCartModalShow,
  isAlreadyInCartModalShow,
  isDeleteProductCartErrorModalShow,
  isProductCountUpErrorModalShow,
} from 'modules/modal';

export const getCartList = () => async (dispatch) => {
  try {
    const response = await axios.get('/mocking/cart');
    const cartProducts = response.data;

    dispatch(isProductCartSuccess(cartProducts));
  } catch (error) {
    dispatch(isProductCartFail(error));
  }
};

export const addProductCart =
  ({ id }) =>
  async (dispatch) => {
    try {
      const response = await axios.post('/mocking/cart', id);
      if (response.data === 'same product in cart') {
        dispatch(isAlreadyInCartModalShow());
        return;
      }
      dispatch(isAddCartModalShow());
    } catch (error) {
      dispatch(isAddCartErrorModalShow(error));
    }
  };

export const deleteProductCart = (id) => async (dispatch) => {
  try {
    const response = await axios.delete('/mocking/cart', id);

    dispatch(isProductCartSuccess(response.data));
  } catch (error) {
    dispatch(isDeleteProductCartErrorModalShow(error));
  }
};

export const deleteSelectProductCart = () => async (dispatch, getState) => {
  const cartProducts = getState().cart.cartProducts;
  const deleteCartProductsId = cartProducts.map(
    (product) => product.cartCheck && product.productId,
  );

  try {
    Promise.all([
      deleteCartProductsId.map((productId) => axios.delete('/mocking/cart', productId)),
    ]).then(() => {
      const editCartProducts = cartProducts.filter((product) => !product.cartCheck);
      dispatch(isProductCartSuccess(editCartProducts));
    });
  } catch (error) {
    dispatch(isDeleteProductCartErrorModalShow(error));
  }
};

export const productCountEdit = (id, count) => async (dispatch) => {
  try {
    const response = await axios.patch('/mocking/cart', { productId: id, product_count: count });
    if (response.status === 202) {
      dispatch(isProductCountUpErrorModalShow());
      return;
    }

    dispatch(isProductCartSuccess(response.data));
  } catch (error) {
    dispatch(isProductCountUpErrorModalShow());
  }
};

export const checkCartProduct = (id, check) => (dispatch, getState) => {
  const editCartProducts = getState().cart.cartProducts.map((product) =>
    product.productId === Number(id) ? ((product.cartCheck = check), { ...product }) : product,
  );

  dispatch(isProductCartSuccess(editCartProducts));
};

export const checkTotalCartProduct = () => (dispatch, getState) => {
  const cartProductCheckList = getState().cart.cartProducts.every((product) => product.cartCheck);

  if (cartProductCheckList) {
    // cartProductCheckList = ture라면 전체 다 체크 없애기
    const editCartProducts = getState().cart.cartProducts.map(
      (product) => ((product.cartCheck = false), { ...product }),
    );

    dispatch(isProductCartSuccess(editCartProducts));
  } else {
    // cartProductCheckList = false라면 전체 체크
    const editCartProducts = getState().cart.cartProducts.map(
      (product) => ((product.cartCheck = true), { ...product }),
    );

    dispatch(isProductCartSuccess(editCartProducts));
  }
};
