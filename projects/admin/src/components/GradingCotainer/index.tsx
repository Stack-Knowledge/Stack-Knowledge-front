import * as S from './style';

interface GradingProps {
  children: React.ReactNode;
}

const GradingContainer: React.FC<GradingProps> = ({ children }) => {
  return (
    <S.GradingtContainer>
      <S.MissionDetailInputWrapper>
        <S.GradingWrapper>{children}</S.GradingWrapper>
      </S.MissionDetailInputWrapper>
      <S.SubmitButtonWrapper>
        <S.SubmitButton>제출하기</S.SubmitButton>
      </S.SubmitButtonWrapper>
    </S.GradingtContainer>
  );
};

export default GradingContainer;
