import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GradingWrapper = styled.div``;

export const TopContentWrapper = styled.div`
  padding-left: 7px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.h2};
  font-weight: 600;
`;

export const SectionContainer = styled.span`
  display: flex;
  gap: 24.75rem;
  padding-bottom: 20px;
`;

export const SectionWrapper = styled.div`
  display: flex;
`;

export const Section = styled.div`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.button};
  margin-bottom: 1.25rem;
  font-weight: 400;
  margin: 0 5px 0 5px;
`;

export const IncorrectWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const AnswerSection = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.body2};
`;

export const AnswerWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const NotAnswerWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const ClickSection = styled.div<{ isSelected: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: ${({ isSelected, theme }) =>
    isSelected ? `3px solid ${theme.color.primary}` : `1px solid #787878`};
  cursor: pointer;
`;
