import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopContentWrapper = styled.div`
  padding-left: 0.4375rem;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.h2};
  font-weight: 600;
`;

export const SectionContainer = styled.span`
  display: flex;
  gap: 24.75rem;
  padding-bottom: 1.25rem;
`;

export const SectionWrapper = styled.div`
  display: flex;
`;

export const Section = styled.div`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.button};
  margin-bottom: 1.25rem;
  font-weight: 400;
  margin: 0 0.3125rem 0 0.3125rem;
`;

export const IncorrectWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const AnswerSection = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.body2};
`;

export const AnswerWrapper = styled.div`
  display: flex;
  gap: 0.375rem;
`;

export const NotAnswerWrapper = styled.div`
  display: flex;
  gap: 0.375rem;
`;

export const ClickSection = styled.div<{ isSelected: boolean }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: ${({ isSelected, theme }) =>
    isSelected
      ? `0.1875rem solid ${theme.color.primary}`
      : `0.0625rem solid #787878`};
  cursor: pointer;
`;
