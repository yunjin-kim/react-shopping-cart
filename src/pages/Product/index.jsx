import React, { useEffect } from 'react';
import { useProducts } from 'hooks';
import { useSelector } from 'react-redux';

import { ProductListStyled, LoadingWrapperStyled } from './style';

import Text from 'components/Text';

import AlreadyCartModal from 'containers/AlreadyInCartModal';
import AddCartModal from 'containers/AddCartModal';
import AddCartErrorModal from 'containers/AddCartErrorModal';

import Product from 'templates/Product';

import { IS_PRODUCT_FAIL } from 'modules/product';

function ProductListPage() {
  const { productLoading, requestProductFail, products, requestProduct } = useProducts();
  const { isAlreadyInCartModalShow, isAddCartModalShow, isAddCartErrorModalShow } = useSelector(
    (state) => state.modal,
  );

  useEffect(() => {
    requestProduct();
  }, []);

  if (productLoading) {
    return (
      <LoadingWrapperStyled>
        <Text color="#333333" fontSize="30px" fontWeight="800">
          로딩중...
        </Text>
      </LoadingWrapperStyled>
    );
  }

  if (requestProductFail === IS_PRODUCT_FAIL) {
    return (
      <Text color="#333333" fontSize="30px" fontWeight="800">
        상품 정보를 불러오는데 실패하였습니다.
      </Text>
    );
  }

  return (
    <>
      {isAlreadyInCartModalShow && <AlreadyCartModal />}
      {isAddCartModalShow && <AddCartModal />}
      {isAddCartErrorModalShow && <AddCartErrorModal />}
      <ProductListStyled>
        {products.map((product) => (
          <Product key={product.productId} {...product} />
        ))}
      </ProductListStyled>
    </>
  );
}

export default ProductListPage;
