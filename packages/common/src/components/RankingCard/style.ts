import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  width: 224px;
  height: 304px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.white};
`;

export const ProfileWrapper = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;

  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typo.h5};
  color: ${({ theme }) => theme.color.black};
  font-weight: 700;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
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
