import styled from '@emotion/styled';

import Image from 'next/image';

export const ItemWrapper = styled.div`
  width: 28.25rem;
  height: 4.375rem;
  border-radius: 0.625rem;
  display: flex;
  padding: 0 2.75rem;
  justify-content: space-between;
  align-items: center;
  transition: ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    background: #ffd79b;
  }
`;

export const FlexWrapper = styled.div<{ profileImage?: string | null }>`
  display: flex;
  align-items: center;
  ${({ profileImage }) =>
    !profileImage &&
    `
    svg {
      width: 2.5rem;
      height:2.5rem;
      margin: 0 1rem 0 2.25rem;
    }
    `}
`;

export const Ranking = styled.span`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  width: 1.125rem;
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
  margin: 0 1rem 0 2.25rem;
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const Point = styled.span`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  margin-right: 0.25rem;
`;

export const PointUnit = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;
