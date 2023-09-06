import styled from '@emotion/styled';

export const SubmitContainer = styled.div`
  background: ${({ theme }) => theme.color.gray['010']};
  width: 950px;
  height: 300px;
  border-radius: 10px;
`;
export const SubmitInputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitInput = styled.textarea`
  background: ${({ theme }) => theme.color.gray['010']};
  outline: none;
  width: 914px;
  height: 220px;
  margin-top: 22px;
  resize: none;
  border: 0;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray['040']};
    font-size: ${({ theme }) => theme.typo.body1};
    font-weight: 500;
  }
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 38px 20px 0;
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.typo.body1};
  width: 123px;
  height: 40px;
  border-radius: 10px;
  font-weight: 400;
  border: 0;
  cursor: pointer;
`;
