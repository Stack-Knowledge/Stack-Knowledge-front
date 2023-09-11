'use client';

import * as S from './style';

import { slicePoint } from 'common';

import { ShopItem } from 'client/components';

const list = [
  {
    itemId: 'id',
    name: '자장면',
    text: '자장면',
    price: 5000,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjNfNDkg/MDAxNDg1MTYwMTQ1MDc5.H7I84KnCb0_U0Fb312NMMk10dbmNhdMb45jDiNYs13Eg.e3185KBkHafPDJpOjsZ7vvvH741l0TzEt2vVNvePS7Mg.JPEG.china_lab/shutterstock_524181190.jpg?type=w800',
  },
  {
    itemId: 'id',
    name: '자장면',
    text: '자장면',
    price: 5000,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjNfNDkg/MDAxNDg1MTYwMTQ1MDc5.H7I84KnCb0_U0Fb312NMMk10dbmNhdMb45jDiNYs13Eg.e3185KBkHafPDJpOjsZ7vvvH741l0TzEt2vVNvePS7Mg.JPEG.china_lab/shutterstock_524181190.jpg?type=w800',
  },
  {
    itemId: 'id',
    name: '자장면',
    text: '자장면',
    price: 5000,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjNfNDkg/MDAxNDg1MTYwMTQ1MDc5.H7I84KnCb0_U0Fb312NMMk10dbmNhdMb45jDiNYs13Eg.e3185KBkHafPDJpOjsZ7vvvH741l0TzEt2vVNvePS7Mg.JPEG.china_lab/shutterstock_524181190.jpg?type=w800',
  },
  {
    itemId: 'id',
    name: '자장면',
    text: '자장면',
    price: 5000,
    image:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjNfNDkg/MDAxNDg1MTYwMTQ1MDc5.H7I84KnCb0_U0Fb312NMMk10dbmNhdMb45jDiNYs13Eg.e3185KBkHafPDJpOjsZ7vvvH741l0TzEt2vVNvePS7Mg.JPEG.china_lab/shutterstock_524181190.jpg?type=w800',
  },
];

const ShopPage = () => (
  <S.PageWrapper>
    <S.MiledgeTitle>현재 마일리지</S.MiledgeTitle>
    <S.FlexWrapper>
      <S.MilidgePoint>{slicePoint(1000)}</S.MilidgePoint>
      <S.MilidgeUnit>M</S.MilidgeUnit>
    </S.FlexWrapper>
    <S.ItemList>
      {list.map((item, index) => (
        <ShopItem key={item.itemId + index} data={item} />
      ))}
    </S.ItemList>
    <S.SelectButton>선택하기</S.SelectButton>
  </S.PageWrapper>
);

export default ShopPage;
