'use client';

import React, { useState } from 'react';
import * as S from './styles';
import AddIcon from '@mui/icons-material/Add';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StepperProgress from '../components/StepperProgress';
import SearchSection from '../components/SearchSection';

const Home: React.FC = () => {
  const [progressIsOpen, setProgressIsOpen] = useState(false);
  const [steps, setSteps] = useState(0);

  return (
    <S.HomeView>
      <S.Onboarding $isOpen={progressIsOpen}>
        <h1>Hey Yuri, welcome to Pactto!</h1>
        <StepperProgress steps={steps} setSteps={setSteps} />

        <S.Progress $isOpen={progressIsOpen}>
          <p>{steps}/4 Completed</p>
          <S.iconButton
            $isOpen={progressIsOpen}
            onClick={() => setProgressIsOpen((prev) => !prev)}
          >
            <ExpandLessIcon className="icon" />
          </S.iconButton>
        </S.Progress>
      </S.Onboarding>
      <S.Main>
        <S.Title>
          <h1>My uploads</h1>
          <S.Button>
            <AddIcon className="add" /> Upload new video
          </S.Button>
        </S.Title>

        <SearchSection />
      </S.Main>
    </S.HomeView>
  );
};

export default Home;
