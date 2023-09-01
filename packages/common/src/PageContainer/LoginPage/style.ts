import styled from '@emotion/styled';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 28vh;
`;

export const TopImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const BottomIconWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

export const StackKnowledge = styled.p`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.black};
  font-family: Roboto;
  font-weight: 700;
  margin: 1.25rem 0 25vh;
`;
