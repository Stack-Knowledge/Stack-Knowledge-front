import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  width: 14rem;
  height: 18.375rem;
  border-radius: 1.25rem;
  background: #fbfbfb;
  box-shadow: 0.25rem 0.25rem 0.25rem 0rem rgba(151, 151, 151, 0.25);
  padding: 0.75rem;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 12.5rem;
  height: 11.875rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.color.gray['040']};
  overflow: hidden;
  position: relative;
  margin-bottom: 0.75rem;

  img {
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const UserName = styled.span`
  ${({ theme }) => theme.typo.body1};
  color: ${({ theme }) => theme.color.black};
  font-weight: 500;
`;

export const Details = styled.span`
  ${({ theme }) => theme.typo.body2};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
`;

export const Price = styled(UserName)`
  ${({ theme }) => theme.typo.body2};
`;

export const WonText = styled(Price)`
  ${({ theme }) => theme.typo.body3};
  font-weight: 400;
  margin-top: 0.125rem;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;
