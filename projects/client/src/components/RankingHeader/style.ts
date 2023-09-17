import styled from '@emotion/styled';

export const RankingHeaderWrapper = styled.div`
  gap: 40px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImageWrapper = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  overflow: hidden;
  position: relative;
  right: 8px;
  border-radius: 6.25rem;
  img {
    object-fit: cover;
  }
`;

export const UserContentWrapper = styled.div`
  display: flex;
`;

export const UserRank = styled.div`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.button};
  padding-right: 0.625rem;
`;
export const UserName = styled.div`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.button};
  padding: 0 0.625rem 0 0.625rem;
  border-left: 0.0625rem solid #cacaca;
  border-right: 0.0625rem solid #cacaca;
`;

export const UserPoint = styled.div`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.button};
  padding-left: 0.625rem;
`;
