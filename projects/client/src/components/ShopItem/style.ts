import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

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
  top: 0.5rem;
  left: 0.5rem;
  z-index: 2;
`;

export const ItemName = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
  margin: 0.75rem 0 0.25rem;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
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
