import React from 'react';
import PropTypes from 'prop-types';
import Product from '../shared/Product';
import ShoppingCart from '../common/Icon/ShoppingCart';
import { UNIT } from '../../constants/appInfo';
import PALETTE from '../../constants/palette';
import * as Styled from './style';

const ProductList = ({ products }) => {
  return (
    <Styled.ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <Product imageUrl={product.image.url} alt={product.image.alt} direction={'column'} size={'17.5rem'}>
            <Styled.ProductInfoContainer>
              <Styled.ProductInfo>
                <Styled.ProductName>{product.name}</Styled.ProductName>
                <Styled.ProductPrice>
                  {product.price.toLocaleString()} {UNIT.MONEY}
                </Styled.ProductPrice>
              </Styled.ProductInfo>
              <Styled.CartButton>
                <ShoppingCart width={'2rem'} color={PALETTE.BLACK} />
              </Styled.CartButton>
            </Styled.ProductInfoContainer>
          </Product>
        </li>
      ))}
    </Styled.ProductList>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
