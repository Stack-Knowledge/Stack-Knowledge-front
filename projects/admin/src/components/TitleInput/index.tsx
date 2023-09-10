import { useState } from 'react';
import * as S from './style';

const TitleInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 20) {
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
      <span>{inputValue.length} / 20</span>
    </S.TitleInputWrapper>
  );
};

export default TitleInput;
