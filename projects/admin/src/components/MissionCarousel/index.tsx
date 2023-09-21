'use client';

import * as S from './style';

import { VectorIcon } from 'common/assets';
import { TaskCard } from 'common/components';

import { useGetScoringList } from 'api/admin';

import { useRouter } from 'next/navigation';

const MissionCarousel = () => {
  const { data } = useGetScoringList();
  const { push } = useRouter();

  const onCardClick = (solveId: string) => {
    push(`mission/scoring/${solveId}`);
  };

  return (
    <S.CarouselWrapper>
      <S.PointerWrapper>
        <VectorIcon direction='left' />
      </S.PointerWrapper>
      <S.ContentWrapper>
        {data?.map((item, index) => (
          <TaskCard
            onClick={() => onCardClick(item.solveId)}
            key={item.solveId + index}
            userName={item.user.name}
            taskTitle={item.title}
            miledge={item.point}
            isShadow={true}
          />
        ))}
      </S.ContentWrapper>
      <S.PointerWrapper>
        <VectorIcon direction='right' />
      </S.PointerWrapper>
    </S.CarouselWrapper>
  );
};

export default MissionCarousel;
