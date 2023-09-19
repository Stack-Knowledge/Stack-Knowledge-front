'use client';

import * as S from './style';

interface GradingProps {
  content: string;
}

const GradingContainer: React.FC<GradingProps> = ({ content }) => {
  return (
    <S.GradingtContainer>
      <S.MissionDetailInputWrapper>
        <S.GradingWrapper>{content}</S.GradingWrapper>
      </S.MissionDetailInputWrapper>
      <S.SubmitButtonWrapper>
        <S.SubmitButton>제출하기</S.SubmitButton>
      </S.SubmitButtonWrapper>
    </S.GradingtContainer>
  );
};

export default GradingContainer;