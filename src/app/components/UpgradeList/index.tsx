import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import * as S from './styles';
import Link from 'next/link';

const UpgradeList: React.FC = () => {
  return (
    <S.List>
      <li>
        <CheckIcon className="check" />
        Every feature on the FREE plan
      </li>
      <li>
        <CheckIcon className="check" />
        Full access to the Pactto app on iPhones, iPads, Android, Mac, Windows,
        and Web
      </li>
      <li>
        <CheckIcon className="check" />
        <p>Max screen recording duration on Pactto Desktop:</p>
        <span>unlimited</span>
      </li>
      <li>
        <CheckIcon className="check" />
        <p>Max review duration on mobile:</p>
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
        <div>
          <Link href="https://pactto.mintlify.app/introduction" target="_blank">
            Integrate Pactto to your website
          </Link>{' '}
          <p>so anyone can send, and pay, for your video feedback</p>
        </div>
      </li>
      <li>
        <CheckIcon className="check" />
        Share your videos with others (no more sending video files around)
      </li>
    </S.List>
  );
};

export default UpgradeList;
