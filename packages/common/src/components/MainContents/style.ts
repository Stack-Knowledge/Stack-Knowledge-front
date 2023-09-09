import styled from '@emotion/styled';

export const MissionText = styled.h4`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.black};
  font-weight: 600;
  margin: 65px 0 20px;
  width: 1280px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Contents = styled.div`
  width: 1280px;
  height: 380px;
  position: relative;
  border-radius: 20px;
  background-color: rgba(217, 217, 217, 0.48);
  display: flex;
  padding: 38px 40px;
  gap: 48px;
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
