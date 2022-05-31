import React from 'react';

import Image from 'components/Image';
import Button from 'components/Button';

import { useProductCounter } from 'hooks';

function ProductCountUpButton({ id }) {
  const { handleProductCounter } = useProductCounter();

  return (
    <Button id={id} width="42px" height="30px" border="1px solid black">
      <Image
        onClick={handleProductCounter}
        src="img/arrow-up.png"
        id={id}
        width="12px"
        height="12px"
        cursor="pointer"
      />
    </Button>
  );
}

export default ProductCountUpButton;
