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

  @media ${({ theme }) => theme.breakPoint[1024]} {
    width: calc(100vw - 20rem);
  }
  @media (max-width: 750px) {
    width: calc(100vw - 18.5rem);
  }
`;

export const PointerWrapper = styled.div`
  cursor: pointer;
`;
