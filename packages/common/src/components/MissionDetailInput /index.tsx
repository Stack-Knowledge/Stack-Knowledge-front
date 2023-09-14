'use client';

import { useState } from 'react';
import * as S from './style';

interface MissionDetailInputProps {
  role: 'admin' | 'client';
}

const MissionDetailInput: React.FC<MissionDetailInputProps> = ({ role }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const MAXLENGTH = 500 as const;

  const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 500) {
      setInputValue(inputValue);
    }
  };

  return (
    <S.SubmitContainer>
      <S.MissionDetailInputWrapper>
        <S.MissionDetailInput
          placeholder={
            role === 'admin'
              ? '문제를 작성해주시기 바랍니다.'
              : '답변을 작성해주시기 바랍니다.'
          }
          maxLength={500}
          value={inputValue}
          onChange={onInputHandler}
        />
      </S.MissionDetailInputWrapper>
      <S.SubmitButtonWrapper inputValue={inputValue.length}>
        <span>
          {inputValue.length} / {MAXLENGTH}
        </span>
        <S.SubmitButton>제출하기</S.SubmitButton>
      </S.SubmitButtonWrapper>
    </S.SubmitContainer>
  );
};

export default MissionDetailInput;
