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
  width: 1279px;
  height: 380px;
  border-radius: 20px;
  background-color: rgba(217, 217, 217, 0.48);
  display: flex;
  padding: 38px 40px;
  gap: 48px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  // 후에 리스트 래퍼에 이 코드를 작성합니다.
  .medal:nth-child(1n) {
    background-color: #ffd79b;
  }
  .medal:nth-child(2n) {
    background-color: ${({ theme }) => theme.color.gray['040']};
  }
  .medal:nth-child(3n) {
    background-color: #ce865d;
  }
`;
