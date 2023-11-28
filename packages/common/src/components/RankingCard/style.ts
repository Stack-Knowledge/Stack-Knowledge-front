import styled from '@emotion/styled';

import Link from 'next/link';
import Image from 'next/image';

export const CardWrapper = styled(Link)`
  width: 14rem;
  height: 19rem;
  border-radius: 1.25rem;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;

  @media ${({ theme }) => theme.breakPoint[1024]} {
    width: calc(100% - 50%);
    height: calc(100% - 65%);
  }
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typo.h5};
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
  margin: 0.75rem 0 5.1875rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 14rem;
  justify-content: center;
`;

export const Point = styled.span`
  ${({ theme }) => theme.typo.button};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
  margin-right: 0.25rem;
  font-family: Roboto;
`;

export const PointUnit = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.black};
  font-family: Roboto;
  font-weight: 500;
`;

export const Medal = styled.div`
  ${({ theme }) => theme.typo.body2}
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;

  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  top: -0.75rem;
  left: -0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
