'use client';

import React, { useState } from 'react';
import * as S from './styles';
import SearchInput from '../components/SearchInput';

const Pacttos: React.FC = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e: { target: { value: string } }) => {
    const newSearchValue = e.target.value;
    setSearch(newSearchValue);
  };

  return (
    <S.Main>
      <S.Title>
        <h1>My uploads</h1>
      </S.Title>

      <S.NotFound>No Pacttos found</S.NotFound>
      <SearchInput search={search} handleChange={handleChange} />
    </S.Main>
  );
};

export default Pacttos;
