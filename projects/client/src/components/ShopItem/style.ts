import styled from '@emotion/styled';

export const ImageWrapper = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.gray['040']};
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
  }
`;

export const CheckBox = styled.div`
  position: absolute;
`;

export const ItemName = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
  margin: 12px 0 4px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const MilidgePoint = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const MilidgeUnit = styled.span`
  ${({ theme }) => theme.typo.body3};
  color: ${({ theme }) => theme.color.black};
  font-weight: 400;
`;
