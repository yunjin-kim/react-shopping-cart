import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Text from 'components/Text';

import AlreadyCartModal from 'containers/AlreadyInCartModal';
import AddCartModal from 'containers/AddCartModal';
import AddCartErrorModal from 'containers/AddCartErrorModal';

import DetailProduct from 'templates/DetailProduct';

import { IS_DETAIL_PRODUCT_FAIL } from 'modules/product';

import { LoadingWrapperStyled } from 'pages/Product/style';

import { useDetailProduct } from 'hooks';

function DetailProudctPage() {
  const { id } = useParams();
  const { isDetailProductLoading, requestDetailProductFail, detailProduct, requestDetailProduct } =
    useDetailProduct(id);
  const { isAlreadyInCartModalShow, isAddCartModalShow, isAddCartErrorModalShow } = useSelector(
    (state) => state.modal,
  );

  useEffect(() => {
    requestDetailProduct();
  }, []);

  if (isDetailProductLoading) {
    return (
      <LoadingWrapperStyled>
        <Text color="#333333" fontSize="30px" fontWeight="800">
          로딩중...
        </Text>
      </LoadingWrapperStyled>
    );
  }

  if (requestDetailProductFail === IS_DETAIL_PRODUCT_FAIL) {
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
      <DetailProduct product={detailProduct} />
    </>
  );
}

export default DetailProudctPage;
