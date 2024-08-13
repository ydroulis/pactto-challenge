'use client';

import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import * as S from './styles';
import SearchInput from '../components/SearchInput';

const Libary: React.FC = () => {
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
      <SearchInput />
    </S.Main>
  );
};

export default Libary;
