import styled from '@emotion/styled';

export const SubmitContainer = styled.div`
  background: ${({ theme }) => theme.color.gray['010']};
  width: 59.375rem;
  height: 18.75rem;
  border-radius: 0.625rem;
`;
export const SubmitInputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitInput = styled.textarea`
  background: ${({ theme }) => theme.color.gray['010']};
  ${({ theme }) => theme.typo.body1};
  outline: none;
  width: 57.125rem;
  height: 13.75rem;
  margin-top: 1.375rem;
  resize: none;
  border: 0;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray['040']};
    font-size: ${({ theme }) => theme.typo.body1};
    font-weight: 500;
  }
`;

export const SubmitButtonWrapper = styled.div<{ inputValue: number }>`
  display: flex;
  justify-content: space-between;
  margin: 0 2.375rem 1.25rem 0;

  span {
    color: ${({ inputValue, theme }) =>
      inputValue >= 500 ? theme.color.primary : theme.color.gray['050']};
    display: flex;
    align-items: flex-end;
    margin-left: 1.125rem;
  }
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.typo.body1};
  width: 7.6875rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  font-weight: 400;
  border: 0;
  cursor: pointer;
`;
