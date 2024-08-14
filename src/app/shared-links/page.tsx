'use client';

import React, { useState } from 'react';
import * as S from './styles';
import SearchInput from '../components/SearchInput';
import Loading from '../components/Loading';

const SharedLinks: React.FC = () => {
  const [searchPublic, setSearchPublic] = useState('');
  const [loadingPublic, setLoadingPublic] = useState(false);
  const [noResultsPublic, setNoResultsPublic] = useState(false);
  const [searchPrivate, setSearchPrivate] = useState('');
  const [loadingPrivate, setLoadingPrivate] = useState(false);
  const [noResultsPrivate, setNoResultsPrivate] = useState(false);

  const handleChangePublic = (e: { target: { value: string } }) => {
    const newSearchValue = e.target.value;
    setSearchPublic(newSearchValue);

    setLoadingPublic(true);
    setNoResultsPublic(false);

    setTimeout(() => {
      setLoadingPublic(false);
      setNoResultsPublic(true);
    }, 1000);
  };

  const handleChangePrivate = (e: { target: { value: string } }) => {
    const newSearchValue = e.target.value;
    setSearchPrivate(newSearchValue);

    setLoadingPrivate(true);
    setNoResultsPrivate(false);

    setTimeout(() => {
      setLoadingPrivate(false);
      setNoResultsPrivate(true);
    }, 1000);
  };

  return (
    <S.Main>
      <div className="search">
        <S.Title>
          <h1>There are no public web links you created</h1>
        </S.Title>

        <SearchInput search={searchPublic} handleChange={handleChangePublic} />
        {loadingPublic && <Loading />}
        {noResultsPublic && <p className="noFound">No videos found</p>}
      </div>

      <div className="search">
        <S.Title>
          <h1>There are no private web links you created</h1>
        </S.Title>

        <SearchInput
          search={searchPrivate}
          handleChange={handleChangePrivate}
        />
        {loadingPrivate && <Loading />}
        {noResultsPrivate && <p className="noFound">No videos found</p>}
      </div>
    </S.Main>
  );
};

export default SharedLinks;
