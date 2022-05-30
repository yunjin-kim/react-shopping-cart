import React from 'react';

import Text from 'components/Text';
import Image from 'components/Image';
import SubTitle from 'components/SubTitle';
import MarginWrapper from 'components/MarginWrapper';
import FlexWrapper from 'components/FlexWrapper';

import AddCartButton from 'containers/AddCartButton';

import { DetailProductStyled, DetailProductPriceStyled } from './style';

function DetailProduct({ product }) {
  return (
    <DetailProductStyled>
      <FlexWrapper flexFlow="column wrap" alignItems="center" alignContent="center">
        <Image
          src={product.productImgSrc}
          width="570px"
          height="570px"
          productTitle={product.productTitle}
        />
        <MarginWrapper marginBottom="20px" />
        <SubTitle width="640px" minWidth="400px" fontSize="2rem" paddingLeft="36px">
          {product.productTitle}
        </SubTitle>
        <MarginWrapper marginBottom="34px" />
        <DetailProductPriceStyled>
          <Text fontSize="24px" fontWeight="400">
            금액
          </Text>
          <Text fontSize="32px" fontWeight="400">
            {product.productPrice && product.productPrice.toLocaleString()}원
          </Text>
        </DetailProductPriceStyled>
        <MarginWrapper marginBottom="58px" />
        <AddCartButton id={product.productId} />
      </FlexWrapper>
    </DetailProductStyled>
  );
}

export default DetailProduct;
