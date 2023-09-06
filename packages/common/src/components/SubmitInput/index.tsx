`use client`;

import * as S from './style';

const SubmitInput = () => (
  <S.SubmitContainer>
    <S.SubmitInputWrapper>
      <S.SubmitInput placeholder='답변을 작성해주시기 바랍니다.' />
    </S.SubmitInputWrapper>
    <S.SubmitButtonWrapper>
      <S.SubmitButton>제출하기</S.SubmitButton>
    </S.SubmitButtonWrapper>
  </S.SubmitContainer>
);

export default SubmitInput;
