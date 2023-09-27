'use client';

import { GradingContainer } from 'admin/components';
import * as S from './style';

import { useGetSolveDetail } from 'api/admin';

import { useState } from 'react';

interface GradingPageProps {
  solveId: string;
}

const GradingPage: React.FC<GradingPageProps> = ({ solveId }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean>(true);

  const { data } = useGetSolveDetail(solveId);

  const handleAnswerClick = (isTrue: boolean) => {
    setSelectedAnswer(isTrue);
  };

  return (
    <S.PageWrapper>
      {data && (
        <div>
          <S.TopContentWrapper>
            <S.Title>채점하기</S.Title>
            <S.SectionContainer>
              <S.SectionWrapper>
                <S.Section>[문제]</S.Section>
                <S.Section>{data}</S.Section>
              </S.SectionWrapper>
              <S.IncorrectWrapper>
                <S.AnswerWrapper>
                  <S.AnswerSection>정답</S.AnswerSection>
                  <S.ClickSection
                    isSelected={selectedAnswer}
                    onClick={() => handleAnswerClick(true)}
                  />
                </S.AnswerWrapper>
                <S.NotAnswerWrapper>
                  <S.AnswerSection>오답</S.AnswerSection>
                  <S.ClickSection
                    isSelected={!selectedAnswer}
                    onClick={() => handleAnswerClick(false)}
                  />
                </S.NotAnswerWrapper>
              </S.IncorrectWrapper>
            </S.SectionContainer>
          </S.TopContentWrapper>
          <GradingContainer>김하온은 남자다.</GradingContainer>
        </div>
      )}
    </S.PageWrapper>
  );
};

export default GradingPage;
