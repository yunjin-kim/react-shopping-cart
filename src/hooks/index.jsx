import { useDispatch, useSelector } from 'react-redux';

import { getCartList, productCountEdit } from 'apis/cart';
import { isProductCartLoading } from 'modules/cart';

import { getDetailProduct, getProductList } from 'apis/product';
import { isDetailProductLoading, isProductLoading } from 'modules/product';

export const useProducts = () => {
  const products = useSelector((state) => state.product.products);
  const productLoading = useSelector((state) => state.product.isProductLoading);
  const requestProductFail = useSelector((state) => state.product.isProductFail);
  const dispatch = useDispatch();

  const requestProduct = () => {
    dispatch(isProductLoading());
    dispatch(getProductList());
  };

  return { productLoading, requestProductFail, products, requestProduct };
};

export const useCart = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const isCartProductsLoading = useSelector((state) => state.cart.isProductCartLoading);
  const requestCartProductFail = useSelector((state) => state.cart.isProductCartFail);
  const dispatch = useDispatch();

  const requestCartProducts = () => {
    dispatch(isProductCartLoading());
    dispatch(getCartList());
  };

  return { isCartProductsLoading, requestCartProductFail, cartProducts, requestCartProducts };
};

export const useDetailProduct = (id) => {
  const detailProduct = useSelector((state) => state.product.detailProduct);
  const isDetailProductLoading = useSelector((state) => state.product.isDetailProductLoading);
  const requestDetailProductFail = useSelector((state) => state.product.isDetailProductFail);
  const dispatch = useDispatch();

  const requestDetailProduct = () => {
    dispatch(isDetailProductLoading());
    dispatch(getDetailProduct(id));
  };

  return { isDetailProductLoading, requestDetailProductFail, detailProduct, requestDetailProduct };
};

export const useProductCounter = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const handleProductCounter = ({ target }) => {
    const cartProduct = cartProducts.find((product) => product.productId === Number(target.id));

    if (target.src.includes('arrow-up') && Number(cartProduct.cartProductCount) <= 1000) {
      dispatch(productCountEdit(target.id, (cartProduct.cartProductCount += 1)));
    } else if (target.src.includes('arrow-down') && Number(cartProduct.cartProductCount) > 1) {
      dispatch(productCountEdit(target.id, (cartProduct.cartProductCount -= 1)));
    }
  };

  return { handleProductCounter };
};
