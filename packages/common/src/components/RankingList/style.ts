import styled from '@emotion/styled';

export const RankingListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const Line = styled.div`
  width: 540px;
  height: 1px;
  margin-top: 13px;
  background-color: ${({ theme }) => theme.color.gray['030']};
`;
