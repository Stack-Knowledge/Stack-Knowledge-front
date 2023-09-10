import { useState } from 'react';
import * as S from './style';

const TitleInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const MAXLENGTH = 20 as const;

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 50) {
      setInputValue(inputValue);
    }
  };

  return (
    <S.TitleInputWrapper inputValue={inputValue.length}>
      <S.TitleInput
        placeholder='제목을 작성해 주시기 바랍니다.'
        onChange={onInputHandler}
        value={inputValue}
      />
      <span>
        {inputValue.length} / {MAXLENGTH}
      </span>
    </S.TitleInputWrapper>
  );
};

export default TitleInput;
