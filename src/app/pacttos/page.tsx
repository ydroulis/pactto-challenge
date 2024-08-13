'use client';

import React from 'react';
import * as S from './styles';
import SearchInput from '../components/SearchInput';

const Pacttos: React.FC = () => {
  return (
    <S.Main>
      <S.Title>
        <h1>My uploads</h1>
      </S.Title>

      <S.NotFound>No Pacttos found</S.NotFound>
      <SearchInput
        search={''}
        handleChange={function (e: { target: { value: string } }): void {
          throw new Error('Function not implemented.');
        }}
      />
    </S.Main>
  );
};

export default Pacttos;
