'use client';

import * as S from './style';

import { VectorIcon } from 'common/assets';
import { TaskCard } from 'common/components';

import { useGetMissionList } from 'api/common';

import { useRouter } from 'next/navigation';

import { useState } from 'react';

const MissionCarousel = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const { data } = useGetMissionList();
  const { push } = useRouter();

  const onCardClick = (taskId: string) => {
    push(`mission/resolve/${taskId}`);
  };

  return (
    <>
      {data?.length != 0 && (
        <S.CarouselWrapper>
          <S.PointerWrapper>
            <VectorIcon direction='left' />
          </S.PointerWrapper>
          <S.ContentWrapper>
            {data?.map((item, index) => (
              <TaskCard
                onClick={() => onCardClick(item.id)}
                key={item.id + index}
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
      )}
    </>
  );
};

export default MissionCarousel;
