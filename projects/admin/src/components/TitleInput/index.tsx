`use client`;

import { useState } from 'react';
import * as S from './style';

const TitleInput = () => {
  const [inputCount, setInputCount] = useState<number>(0);

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputCount(inputValue.length <= 20 ? inputValue.length : 20);
  };

  return (
    <S.TitleInputWrapper inputContent={inputCount}>
      <S.TitleInput
        placeholder='제목을 작성해 주시기 바랍니다.'
        maxLength={20}
        onChange={onInputHandler}
      />
      <span>{inputCount} / 20</span>
    </S.TitleInputWrapper>
  );
};

export default TitleInput;
