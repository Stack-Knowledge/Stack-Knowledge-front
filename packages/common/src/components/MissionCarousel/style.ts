import styled from '@emotion/styled';

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 4.125rem 3rem;
`;

export const PointerWrapper = styled.div`
  cursor: pointer;
`;
