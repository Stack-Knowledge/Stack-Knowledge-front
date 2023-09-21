'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import * as S from './style';

interface MissionDetailInputProps {
  role: 'admin' | 'client';
  onClick?: () => void;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
}

const MissionDetailInput: React.FC<MissionDetailInputProps> = ({
  role,
  onClick,
  inputValue,
  setInputValue,
}) => {
  const MAXLENGTH = 500 as const;

  const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= MAXLENGTH) {
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
          maxLength={MAXLENGTH}
          value={inputValue}
          onChange={onInputHandler}
        />
      </S.MissionDetailInputWrapper>
      <S.SubmitButtonWrapper inputValue={inputValue.length}>
        <span>
          {inputValue.length} / {MAXLENGTH}
        </span>
        <S.SubmitButton onClick={onClick}>제출하기</S.SubmitButton>
      </S.SubmitButtonWrapper>
    </S.SubmitContainer>
  );
};

export default MissionDetailInput;
