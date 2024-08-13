'use client';

import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import * as S from './styles';
import SearchInput from '../components/SearchInput';
import Loading from '../components/Loading';

const Libary: React.FC = () => {
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
        <h1>Select a video</h1>
      </S.Title>

      <S.Button className="primary">
        <AddIcon className="add" />
        Upload New
      </S.Button>

      <S.Info>
        Videos uploaded to the reference video library can be used in
        side-by-side comparisons, or can be shared with learners directly.
      </S.Info>
      <SearchInput search={search} handleChange={handleChange} />
      {loading && <Loading />}
      {noResults && <p className="noFound">No videos found</p>}
    </S.Main>
  );
};

export default Libary;
