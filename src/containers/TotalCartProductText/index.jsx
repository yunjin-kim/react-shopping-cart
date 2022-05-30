import React from 'react';
import { useSelector } from 'react-redux';

import Text from 'components/Text';

function TotalCartProductText() {
  const isTotalCartProductCheck = useSelector((state) => state.cart.cartProducts).every(
    (product) => product.cartCheck,
  );

  return <Text>{isTotalCartProductCheck ? '선택해제' : '전체선택'}</Text>;
}

export default TotalCartProductText;
