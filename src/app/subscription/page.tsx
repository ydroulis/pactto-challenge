'use client';

import React, { useState } from 'react';

import * as S from './styles';
import Link from 'next/link';
import CheckIcon from '@mui/icons-material/Check';
import Modal from '../components/Modal';
import UpgradeList from '../components/UpgradeList';

const Subscription: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <S.Main>
        <S.TrialDays>
          You have access to <span>PACTTO PRO</span> as a trial.{' '}
          <span>1 days left</span>
        </S.TrialDays>
        <S.Button onClick={() => setIsOpen(true)}>
          Subscribe to Pactto Pro
        </S.Button>
        <S.Allow>The PACTTO PRO subscription allows you to:</S.Allow>
        <S.List>
          <li>
            <CheckIcon className="check" />
            Every feature on the FREE plan
          </li>
          <li>
            <CheckIcon className="check" />
            Full access to the Pactto app on iPhones, iPads, Android, Mac,
            Windows, and Web
          </li>
          <li>
            <CheckIcon className="check" />
            <p>Max screen recording duration on Pactto Desktop:</p>
            <span>unlimited</span>
          </li>
          <li>
            <CheckIcon className="check" />
            <p> Max review duration on mobile:</p>
            <span>unlimited</span>
          </li>
          <li>
            <CheckIcon className="check" />
            Max review duration on Pactto Web: 12 minutes
          </li>
          <li>
            <CheckIcon className="check" />
            Max review duration on Pactto Desktop: 20 minutes
          </li>
          <li>
            <CheckIcon className="check" />
            Manage and use your reference video library on the Web and Desktop
          </li>
          <li>
            <CheckIcon className="check" />
            Review videos uploaded by you, using the browser
          </li>
          <li>
            <CheckIcon className="check" />
            Add your own logo to create branded reviews
          </li>
          <li>
            <CheckIcon className="check" />
            If you sell reviews, the Pactto take rate for paid reviews is 3%,
            instead of 12% for free users
          </li>
          <li>
            <CheckIcon className="check" />
            <Link
              href="https://pactto.mintlify.app/introduction"
              target="_blank"
            >
              Integrate Pactto to your website
            </Link>{' '}
            so anyone can send, and pay, for your video feedback
          </li>
          <li>
            <CheckIcon className="check" />
            Share your videos with others (no more sending video files around)
          </li>
        </S.List>
      </S.Main>
      <Modal
        isOpen={isOpen}
        closeAction={() => setIsOpen(false)}
        buttonAction={() => setIsOpen(false)}
        width="550px"
        title="Upgrade"
        subtitle="By subscribing to the Pactto Pro plan for $9/month, you will be able to:"
        primaryBtn="Subscribe"
        secondaryBtn="Cancel"
      >
        <UpgradeList />
      </Modal>
    </>
  );
};

export default Subscription;
