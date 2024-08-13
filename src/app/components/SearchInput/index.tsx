import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import * as S from './styles';

const SearchInput: React.FC = () => {
  return (
    <S.SearchInput>
      <S.Input type="text" placeholder="Search" />
      <SearchIcon className="glass" />
    </S.SearchInput>
  );
};

export default SearchInput;
