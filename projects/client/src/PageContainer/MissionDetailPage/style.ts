import styled from '@emotion/styled';

export const PageWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const TimerWrapper = styled.div`
  margin: 3.75rem 0;
`;

export const Section = styled.div`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.typo.button};
  margin-bottom: 1.25rem;
  font-weight: 400;
  max-width: 55.625rem;
`;

export const MissionWrapper = styled.div`
  margin-top: 1.875rem;
  margin-bottom: 4rem;
`;

export const ModalWrapper = styled.dialog`
  position: absolute;
  margin-top: 16rem;
  border-radius: 1.25rem;
  border: 0;
  padding: 0;
  box-shadow: 0.25rem 0.25rem 0.625rem 0rem rgba(169, 169, 169, 0.6);
  ::backdrop {
    opacity: 0;
  }
`;

export const SectionWrapper = styled.span`
  display: flex;
  gap: 0.625rem;
`;
