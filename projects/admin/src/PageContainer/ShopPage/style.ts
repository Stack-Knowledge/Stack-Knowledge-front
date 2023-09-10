import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10.625rem;
`;

export const ShopText = styled.h2`
  ${({ theme }) => theme.typo.h2}
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
  width: 82rem;
  margin: 3.75rem 0 1.75rem;
`;
