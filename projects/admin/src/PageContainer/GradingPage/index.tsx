'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import { GradingContainer } from 'admin/components';

import { useGetSolveDetail, usePostScoringResult } from 'api/admin';

import * as S from './style';

interface GradingPageProps {
  solveId: string;
}

const GradingPage: React.FC<GradingPageProps> = ({ solveId }) => {
  const { push } = useRouter();
  const [selectedAnswer, setSelectedAnswer] = useState<boolean>(true);

  const { data } = useGetSolveDetail(solveId);
  const { mutate, isSuccess } = usePostScoringResult(solveId);

  const handleAnswerClick = (isTrue: boolean) => {
    setSelectedAnswer(isTrue);
  };

  const handleSubmit = () => {
    const solveStatus = selectedAnswer ? 'CORRECT_ANSWER' : 'WRONG_ANSWER';

    mutate({ solveStatus: solveStatus });
  };

  if (isSuccess) {
    push('/mission/scoring');
    toast.success('성공적으로 채점되었습니다.');
  }

  return (
    <S.PageWrapper>
      {data && (
        <div>
          <S.TopContentWrapper>
            <S.Title>채점하기</S.Title>
            <S.SectionContainer>
              <S.SectionWrapper>
                <S.Section>[문제]</S.Section>
                <S.Section>{data.title}</S.Section>
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
          <GradingContainer onClick={handleSubmit}>
            {data.solution}
          </GradingContainer>
        </div>
      )}
    </S.PageWrapper>
  );
};

export default GradingPage;
