import React, { useEffect, useState } from 'react';
import * as S from './styles';
import VideoList from '../VideoList';
import cover from '../../assets/images/cover.png';
import SearchInput from '../SearchInput';

const videoList = [
  {
    title: 'teste1',
    date: '2024-07-30T14:00:00Z',
    coverImg: cover,
  },
  {
    title: 'teste2',
    date: '2024-08-07T15:00:00Z',
    coverImg: cover,
  },
  {
    title: 'teste3',
    date: '2024-08-01T16:00:00Z',
    coverImg: cover,
  },
];

const SearchSection: React.FC = () => {
  const [search, setSearch] = useState('');
  const [videos, setVideos] = useState(videoList);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleChange = (e: { target: { value: string } }) => {
    const newSearchValue = e.target.value;
    setSearch(newSearchValue);

    setLoading(true);
    setNoResults(false);

    setTimeout(() => {
      const filteredVideos = videoList.filter((video) =>
        video.title.toLowerCase().includes(newSearchValue.toLowerCase()),
      );

      if (filteredVideos.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
        setVideos(filteredVideos);
      }

      setLoading(false);
    }, 1000);
  };
  return (
    <S.Section>
      <SearchInput search={search} handleChange={handleChange} />

      <VideoList list={videos} loading={loading} noResults={noResults} />
    </S.Section>
  );
};

export default SearchSection;
