'use client';

import * as S from './style';

import { VectorIcon } from 'common/assets';
import { TaskCard } from 'common/components';

import { useGetMissionList } from 'api/common';

interface MissionCarouselType {
  role: 'admin' | 'client';
}

const MissionCarousel: React.FC<MissionCarouselType> = ({ role }) => {
  const { data } = useGetMissionList();

  return (
    <S.CarouselWrapper>
      <S.PointerWrapper>
        <VectorIcon direction='left' />
      </S.PointerWrapper>
      <S.ContentWrapper>
        {data?.map((item, index) => (
          <TaskCard
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
  );
};

export default MissionCarousel;
