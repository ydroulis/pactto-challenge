import React from 'react';
import * as S from './styles';
import VideoList from '../VideoList';
import cover from '../../assets/images/cover.png';
import SearchInput from '../SearchInput';

const videoList = [
  {
    title: 'record-screen-video-Tue_30_Jul_2024_22_59_25_GMT.webm',
    date: '2024-07-30T14:00:00Z',
    coverImg: cover,
  },
  {
    title: 'record-screen-video-Tue_07_Ago_2024_22_59_25_GMT.webm',
    date: '2024-08-07T15:00:00Z',
    coverImg: cover,
  },
  {
    title: 'record-screen-video-Tue_01_Ago_2024_22_59_25_GMT.webm',
    date: '2024-08-01T16:00:00Z',
    coverImg: cover,
  },
];

const SearchSection: React.FC = () => {
  return (
    <S.Section>
      <SearchInput />

      <VideoList list={videoList} />
    </S.Section>
  );
};

export default SearchSection;
