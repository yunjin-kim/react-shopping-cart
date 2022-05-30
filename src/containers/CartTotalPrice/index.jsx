import React from 'react';

import Text from 'components/Text';

function CartTotalPrice({ cartProducts }) {
  let totalPrice = 0;
  cartProducts.map((product) =>
    product.cartCheck ? (totalPrice += product.cartProductCount * product.productPrice) : '',
  );

  return <Text>{totalPrice.toLocaleString()}원</Text>;
}

export default CartTotalPrice;
