'use client';

import * as S from './style';

interface GradingProps {
  children: React.ReactNode;
  onClick: () => void;
}

const GradingContainer: React.FC<GradingProps> = ({ children, onClick }) => {
  return (
    <S.GradingtContainer>
      <S.MissionDetailInputWrapper>
        <S.GradingWrapper>{children}</S.GradingWrapper>
      </S.MissionDetailInputWrapper>
      <S.SubmitButtonWrapper>
        <S.SubmitButton onClick={onClick}>제출하기</S.SubmitButton>
      </S.SubmitButtonWrapper>
    </S.GradingtContainer>
  );
};

export default GradingContainer;
