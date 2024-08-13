'use client';

import React from 'react';
import * as S from './styles';
import SearchInput from '../components/SearchInput';

const VideosToReview: React.FC = () => {
  return (
    <S.Main>
      <S.Title>
        <h1>There are no review requests sent to you</h1>
      </S.Title>

      <SearchInput />
    </S.Main>
  );
};

export default VideosToReview;
