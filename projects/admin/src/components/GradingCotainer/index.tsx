'use client';

import * as S from './style';

interface GradingProps {
  children: React.ReactNode;
  onClick: () => void;
  onAiClick: () => void;
  isLoading: boolean;
}

const GradingContainer: React.FC<GradingProps> = ({
  children,
  onClick,
  onAiClick,
  isLoading,
}) => (
  <S.GradingtContainer>
    <S.MissionDetailInputWrapper>
      <S.GradingWrapper>{children}</S.GradingWrapper>
    </S.MissionDetailInputWrapper>
    <S.SubmitButtonWrapper>
      <S.SubmitButton disabled={isLoading} onClick={onClick}>
        제출하기
      </S.SubmitButton>
      <S.AIButton disabled={isLoading} onClick={onAiClick}>
        AI로 채첨하기
      </S.AIButton>
    </S.SubmitButtonWrapper>
  </S.GradingtContainer>
);

export default GradingContainer;
