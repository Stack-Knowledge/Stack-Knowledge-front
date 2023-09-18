'use client';

import { RankingList } from 'common';
import { RankingItem } from 'common';

import { RankingHeader } from 'client/components';
import * as S from './style';

const rankingData = {
  data: {
    id: 'Hi',
    cumulatePoint: 100,
    user: {
      id: 'Hello',
      email: 'ltr@na',
      name: '이태랑',
      profileImage:
        'https://cdn.mhnse.com/news/photo/202210/147617_140985_1213.jpg',
    },
  },
  ranking: 1,
  list: [
    {
      id: 'User1',
      cumulatePoint: 20000,
      user: {
        id: 'User1_id',
        email: 'user1@example.com',
        name: 'ㅎㅇ 희찰리송',
        profileImage:
          'https://cdn.discordapp.com/attachments/956190154454876183/1114199263220617316/image.png',
      },
    },
    {
      id: 'User2',
      cumulatePoint: 100,
      user: {
        id: 'User2_id',
        email: 'user2@example.com',
        name: '이태랑',
        profileImage:
          'https://cdn.discordapp.com/attachments/956190154454876183/1114115293107736636/F8820139-A5DD-471C-A457-129A3211760A.jpg',
      },
    },
    {
      id: 'User3',
      cumulatePoint: 20,
      user: {
        id: 'User3_id',
        email: 'user3@example.com',
        name: '쪙우><',
        profileImage:
          'https://cdn.discordapp.com/attachments/956190154454876183/1114115292826706010/26B294E1-B9AA-4810-924E-69AC63DAEF42.jpg',
      },
    },
  ],
};

const RankingPage = () => (
  <S.RankingWrapper>
    <div>
      <RankingHeader data={rankingData.data} ranking={rankingData.ranking} />
    </div>
    <RankingList list={rankingData.list} />
  </S.RankingWrapper>
);

export default RankingPage;
