import styled from '@emotion/styled';

export const MissionText = styled.h4`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
  margin: 4.0625rem 0 1.25rem;
  width: 80rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
`;

export const Contents = styled.div`
  width: 80rem;
  height: 23.75rem;
  position: relative;
  border-radius: 1.25rem;
  background-color: rgba(217, 217, 217, 0.48);
  display: flex;
  padding: 2.375rem 2.5rem;
  gap: 3rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  .medalWrapper:nth-child(1n) .medal {
    background-color: #ffd79b;
  }
  .medalWrapper:nth-child(2n) .medal {
    background-color: ${({ theme }) => theme.color.gray['040']};
  }
  .medalWrapper:nth-child(3n) .medal {
    background-color: #ce865d;
  }
`;
