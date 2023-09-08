import styled from '@emotion/styled';

export const RankingListWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const RankingText = styled.h3`
  ${({ theme }) => theme.typo.h3}
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  margin: 3.75rem 0 1rem 2.75rem;
`;

export const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8125rem;
`;

export const Line = styled.div`
  width: 33.75rem;
  height: 1px;
  margin-top: 0.8125rem;
  background-color: ${({ theme }) => theme.color.gray['030']};
`;
