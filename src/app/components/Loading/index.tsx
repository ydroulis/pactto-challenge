import React from 'react';

import * as S from './styles';

const Loading: React.FC = () => {
  return (
    <S.Loading>
      <p>Loading...</p>
      <S.LoadingBar>
        <S.Bar />
      </S.LoadingBar>
    </S.Loading>
  );
};

export default Loading;
