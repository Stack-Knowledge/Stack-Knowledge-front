import styled from '@emotion/styled';

export const TitleInput = styled.input`
  ${({ theme }) => theme.typo.body1};
  background: ${({ theme }) => theme.color.gray['010']};
  width: 59.375rem;
  height: 6.25rem;
  border-radius: 0.625rem;
  outline: none;
  text-indent: 1.125rem;
  border: 0;
  box-shadow: 0.1875rem 0.1875rem 0.25rem 0rem rgba(120, 120, 120, 0.25);
`;
