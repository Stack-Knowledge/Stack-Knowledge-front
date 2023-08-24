import styled from '@emotion/styled';

import Image from 'next/image';

export const ItemWrapper = styled.div`
  width: 456px;
  height: 70px;
  border-radius: 10px;
  display: flex;
  padding: 0 44px;
  align-items: center;
  gap: 231px;
  transition: ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    background: #ffd79b;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Ranking = styled.span`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
  margin: 0 16px 0 20px;
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
  margin-right: 4px;
`;

export const PointUnit = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;
