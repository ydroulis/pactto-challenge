import React, { Dispatch, SetStateAction } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import * as S from './styles';

interface ISearchInputProps {
  search: string;
  handleChange: (e: { target: { value: string } }) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ search, handleChange }) => {
  return (
    <S.SearchInput>
      <S.Input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={search}
      />
      <SearchIcon className="glass" />
    </S.SearchInput>
  );
};

export default SearchInput;
