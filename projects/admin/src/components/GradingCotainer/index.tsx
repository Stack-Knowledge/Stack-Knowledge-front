import * as S from './style';

interface GradingProps {
  child: React.ReactNode;
}

const GradingContainer: React.FC<GradingProps> = ({ child }) => {
  return (
    <S.GradingtContainer>
      <S.MissionDetailInputWrapper>
        <S.GradingWrapper>{child}</S.GradingWrapper>
      </S.MissionDetailInputWrapper>
      <S.SubmitButtonWrapper>
        <S.SubmitButton>제출하기</S.SubmitButton>
      </S.SubmitButtonWrapper>
    </S.GradingtContainer>
  );
};

export default GradingContainer;
