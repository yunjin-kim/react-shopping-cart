import React from 'react';

import FlexWrapper from 'components/FlexWrapper';
import MarginWrapper from 'components/MarginWrapper';
import Button from 'components/Button';

import HomeButton from 'containers/HomeButton';
import OrderListButton from 'containers/OrderListButton';

import { HeaderStyled, PageButtonContainerStyled } from './style';

function Header() {
  return (
    <HeaderStyled>
      <PageButtonContainerStyled>
        <HomeButton />
        <FlexWrapper>
          <MarginWrapper marginRight="2.2vw">
            <Button fontSize="1.5rem" color="whiteFontColor" border="none">
              장바구니
            </Button>
          </MarginWrapper>
          <OrderListButton />
        </FlexWrapper>
      </PageButtonContainerStyled>
    </HeaderStyled>
  );
}

export default Header;
