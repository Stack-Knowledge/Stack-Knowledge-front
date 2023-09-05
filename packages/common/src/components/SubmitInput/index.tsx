`use client`;

import * as S from './style';

const SubmitInput = () => (
  <S.SubmitContainer>
    <S.SubmitInputWrapper>
      <S.SubmitInput placeholder='입력하세요' />
    </S.SubmitInputWrapper>
    <S.SubmitButtonWrapper>
      <S.SubmitButton>제출하기</S.SubmitButton>
    </S.SubmitButtonWrapper>
  </S.SubmitContainer>
);

export default SubmitInput;
