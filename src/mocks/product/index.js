import { rest } from 'msw';

export const products = [
  {
    productId: 1,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/52afbaa7-809e-4e55-8080-3c357a94ba3a.gif',
    productTitle: '배달이친구들 케이블타이',
    productPrice: 4000,
  },
  {
    productId: 2,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/f65ec0ec-ea5f-41bb-ba43-68579fbcf34a.png',
    productTitle: '을지로 목장갑. 위잉 뚝딱',
    productPrice: 6000,
  },
  {
    productId: 3,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/526c13d0-5e85-438e-ae0b-ad91ac026eb9.gif',
    productTitle: '배달이 친구들 팝업카드',
    productPrice: 4000,
  },
  {
    productId: 4,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/835c5ad8-22b6-4556-b3bd-a4e843c1190b.png',
    productTitle: '유해물질이 나오지 않는 지우개',
    productPrice: 1000,
  },
  {
    productId: 5,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/a7e6cb1b-0929-46db-8434-208c65a6cbc5.png',
    productTitle: '떡볶이키트. 떡볶이가 필요해',
    productPrice: 11000,
  },
  {
    productId: 6,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/b77cdcf9-3410-4122-9e5e-435a9724bff7.png',
    productTitle: '포스터. 독고배달이',
    productPrice: 2000,
  },
  {
    productId: 7,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/401a94ad-fe25-4176-951b-2ea7cf4f989e.png',
    productTitle: '배달이친구들 지금뭐해 피규어. 메이의 감미로운 오후',
    productPrice: 3500,
  },
  {
    productId: 8,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/0d5029a4-f153-4b13-9b46-ab16792a573e.png',
    productTitle: '배달이친구들 지금뭐해 피규어. 독고의 책읽는 시간',
    productPrice: 3500,
  },
  {
    productId: 9,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/4c9e2976-e2c1-453a-bd3c-6f96a132ee7b.png',
    productTitle: '배달이친구들 지금뭐해 피규어. 냥이의 등 긁는 하루',
    productPrice: 3500,
  },
  {
    productId: 10,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/21cb8a0e-3aa4-464e-9354-104030c54294.png',
    productTitle: '배달이친구들 지금뭐해 피규어. 감자의 수확하는 계절',
    productPrice: 3500,
  },
  {
    productId: 11,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/52e07957-c5ab-4f0c-862b-9dc6318dfffa.png',
    productTitle: '엽서. 복',
    productPrice: 1000,
  },
  {
    productId: 12,
    productImgSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/3a9fd048-ffc5-49ac-8a77-5428429ea635.png',
    productTitle: '엽서. 축',
    productPrice: 1000,
  },
];

export const productHandler = [
  rest.get('/mocking/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(1000), ctx.json(products));
  }),
  rest.get('/mocking/products/:id', (req, res, ctx) => {
    const product = products.find((product) => product.productId === Number(req.params.id));

    return res(ctx.status(200), ctx.delay(1000), ctx.json(product));
  }),
];
