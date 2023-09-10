import React from 'react';
import * as S from './style';

interface SubmitInputProps {
  role: 'admin' | 'client';
}

const SubmitInput: React.FC<SubmitInputProps> = ({ role }) => (
  <S.SubmitContainer>
    <S.SubmitInputWrapper>
      <S.SubmitInput
        placeholder={
          role === 'admin'
            ? '문제를 작성해주시기 바랍니다.'
            : '답변을 작성해주기 바랍니다.'
        }
        maxLength={500}
      />
    </S.SubmitInputWrapper>
    <S.SubmitButtonWrapper>
      <S.SubmitButton>제출하기</S.SubmitButton>
    </S.SubmitButtonWrapper>
  </S.SubmitContainer>
);

export default SubmitInput;
