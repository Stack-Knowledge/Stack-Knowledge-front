import styled from '@emotion/styled';

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const ContentWrapper = styled.div<{ taskCard?: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.taskCard}, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 4.125rem 2.5rem;
  width: fit-content;
`;

export const PointerWrapper = styled.div`
  cursor: pointer;
`;
