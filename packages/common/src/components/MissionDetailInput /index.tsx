import { Dispatch, SetStateAction, useState } from 'react';
import * as S from './style';
import { useRouter } from 'next/router';

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

  const router = useRouter();

  const onSuccessFunc = () => {
    // 원하는 작업을 수행한 후
    // 페이지를 이동하고 alert를 표시합니다.
    router.push('/');
    alert('문제가 등록되었습니다 !');
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
        <S.SubmitButton onClick={onSuccessFunc}>제출하기</S.SubmitButton>
      </S.SubmitButtonWrapper>
    </S.SubmitContainer>
  );
};

export default MissionDetailInput;
