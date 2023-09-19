import styled from '@emotion/styled';

export const GradingtContainer = styled.div`
  background: ${({ theme }) => theme.color.gray['010']};
  width: 59.375rem;
  height: 18.75rem;
  border-radius: 0.625rem;
  box-shadow: 0.1875rem 0.1875rem 0.25rem 0rem rgba(120, 120, 120, 0.25);
`;
export const MissionDetailInputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const GradingWrapper = styled.div`
  background: ${({ theme }) => theme.color.gray['010']};
  ${({ theme }) => theme.typo.body1};
  outline: none;
  width: 57.125rem;
  height: 13.75rem;
  margin-top: 1.375rem;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 2.375rem 1.25rem 0;
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.typo.body1};
  width: 7.6875rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  font-weight: 400;
  border: 0;
  cursor: pointer;
`;
