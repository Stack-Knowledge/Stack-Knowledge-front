import styled from '@emotion/styled';

export const RankingHeaderWrapper = styled.div`
  gap: 2.5rem;
  width: 16.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImageWrapper = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  overflow: hidden;
  position: relative;
  right: 0.5rem;
  border-radius: 6.25rem;
  background-color: rgba(143, 143, 143, 1);

  &:hover {
    img {
      object-fit: cover;
      cursor: pointer;
      opacity: 0.3;
    }

    &::before {
      color: ${({ theme }) => theme.color.white};
      content: '+';
      position: absolute;
      transform: translate(70%, 20%);
      font-size: 5rem;
      font-weight: 200;
    }
  }
`;

export const UserContentWrapper = styled.div`
  display: flex;
  width: 350px;
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
