import styled from '@emotion/styled';

export const TitleInputWrapper = styled.div<{ inputValue: number }>`
  background: ${({ theme }) => theme.color.gray['010']};
  width: 59.375rem;
  height: 6.25rem;
  display: flex;
  border-radius: 0.625rem;
  align-items: center;
  box-shadow: 0.1875rem 0.1875rem 0.25rem 0rem rgba(120, 120, 120, 0.25);

  span {
    color: ${(props) =>
      props.inputValue === 20
        ? 'var(--maincolor, #FFA927)'
        : 'var(--darkgray_3, #6c6c6c)'};
  }
`;

export const TitleInput = styled.input`
  ${({ theme }) => theme.typo.body1};
  background: ${({ theme }) => theme.color.gray['010']};
  color: ${({ theme }) => theme.color.black};
  width: 54.25rem;
  height: 6.25rem;
  border-radius: 0.625rem;
  outline: none;
  text-indent: 1.125rem;
  border: 0;
`;
