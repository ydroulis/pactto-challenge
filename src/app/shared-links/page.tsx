'use client';

import React from 'react';
import * as S from './styles';
import SearchInput from '../components/SearchInput';

const SharedLinks: React.FC = () => {
  return (
    <S.Main>
      <div>
        <S.Title>
          <h1>There are no public web links you created</h1>
        </S.Title>

        <SearchInput />
      </div>

      <div>
        <S.Title>
          <h1>There are no private web links you created</h1>
        </S.Title>

        <SearchInput />
      </div>
    </S.Main>
  );
};

export default SharedLinks;
