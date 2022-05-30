import React from 'react';
import { Link } from 'react-router-dom';

import Text from 'components/Text';
import Image from 'components/Image';
import MarginWrapper from 'components/MarginWrapper';
import FlexWrapper from 'components/FlexWrapper';

import AddCartIconButton from 'containers/AddCartIconButton';
import ProductTitle from 'containers/ProductTitle';

import ProductStyled from './style';

function Product({ productId, productImgSrc, productTitle, productPrice }) {
  return (
    <ProductStyled>
      <Link to={`/product/${productId}`}>
        <MarginWrapper marginBottom="18px">
          <Image
            src={productImgSrc}
            id={productId}
            width="100%"
            height="14.24vmax"
            cursor="pointer"
            productTitle={productTitle}
          />
        </MarginWrapper>
      </Link>
      <FlexWrapper flexFlow="row nowrap" justifyContent="space-between" alignItems="center">
        <Link to={`/product/${productId}`}>
          <div>
            <MarginWrapper marginBottom="6px">
              <ProductTitle id={productId}>{productTitle}</ProductTitle>
            </MarginWrapper>
            <Text
              id={productId}
              color="#333333"
              fontSize="1.25rem"
              fontWeight="400"
              cursor="pointer"
            >
              {productPrice && productPrice.toLocaleString()}원
            </Text>
          </div>
        </Link>
        <AddCartIconButton id={productId} />
      </FlexWrapper>
    </ProductStyled>
  );
}

export default Product;
