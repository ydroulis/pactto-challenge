'use client';

import React, { useState } from 'react';
import * as S from './styles';
import SearchInput from '../components/SearchInput';
import Loading from '../components/Loading';

const VideosToReview: React.FC = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleChange = (e: { target: { value: string } }) => {
    const newSearchValue = e.target.value;
    setSearch(newSearchValue);

    setLoading(true);
    setNoResults(false);

    setTimeout(() => {
      setLoading(false);
      setNoResults(true);
    }, 1000);
  };
  return (
    <S.Main>
      <S.Title>
        <h1>There are no review requests sent to you</h1>
      </S.Title>

      <SearchInput search={search} handleChange={handleChange} />
      {loading && <Loading />}
      {noResults && <p className="noFound">No videos found</p>}
    </S.Main>
  );
};

export default VideosToReview;
