import axios from 'axios';

import { getProductCartSuccess, getProductCartFail } from 'modules/cart';

import {
  openAddCartErrorModal,
  openAddCartModal,
  openAlreadyInCartModal,
  openDeleteProductCartErrorModal,
  openProductCountUpErrorModal,
} from 'modules/modal';

export const getCartList = () => async (dispatch) => {
  try {
    const response = await axios.get('/mocking/cart');
    const cartProducts = response.data;

    dispatch(getProductCartSuccess(cartProducts));
  } catch (error) {
    dispatch(getProductCartFail(error));
  }
};

export const addProductCart =
  ({ id }) =>
  async (dispatch) => {
    try {
      const response = await axios.post('/mocking/cart', id);
      if (response.data === 'same product in cart') {
        dispatch(openAlreadyInCartModal());
        return;
      }
      dispatch(openAddCartModal());
    } catch (error) {
      dispatch(openAddCartErrorModal(error));
    }
  };

export const deleteProductCart = (id) => async (dispatch) => {
  try {
    const response = await axios.delete('/mocking/cart', id);

    dispatch(getProductCartSuccess(response.data));
  } catch (error) {
    dispatch(openDeleteProductCartErrorModal(error));
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
      dispatch(getProductCartSuccess(editCartProducts));
    });
  } catch (error) {
    dispatch(openDeleteProductCartErrorModal(error));
  }
};

export const productCountEdit = (id, count) => async (dispatch) => {
  try {
    const response = await axios.patch('/mocking/cart', { productId: id, product_count: count });
    if (response.status === 202) {
      dispatch(openProductCountUpErrorModal());
      return;
    }

    dispatch(getProductCartSuccess(response.data));
  } catch (error) {
    dispatch(openProductCountUpErrorModal());
  }
};

export const checkCartProduct = (id, check) => (dispatch, getState) => {
  const editCartProducts = getState().cart.cartProducts.map((product) =>
    product.productId === Number(id) ? ((product.cartCheck = check), { ...product }) : product,
  );

  dispatch(getProductCartSuccess(editCartProducts));
};

export const checkTotalCartProduct = () => (dispatch, getState) => {
  const cartProductCheckList = getState().cart.cartProducts.every((product) => product.cartCheck);

  if (cartProductCheckList) {
    // cartProductCheckList = ture라면 전체 다 체크 없애기
    const editCartProducts = getState().cart.cartProducts.map(
      (product) => ((product.cartCheck = false), { ...product }),
    );

    dispatch(getProductCartSuccess(editCartProducts));
  } else {
    // cartProductCheckList = false라면 전체 체크
    const editCartProducts = getState().cart.cartProducts.map(
      (product) => ((product.cartCheck = true), { ...product }),
    );

    dispatch(getProductCartSuccess(editCartProducts));
  }
};
