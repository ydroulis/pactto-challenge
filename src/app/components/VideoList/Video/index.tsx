import React, { useState } from 'react';
import * as S from './styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import { format } from 'date-fns';
import { IVideoProps } from '@/app/models/videos';
import MenuOptions from '../MenuOptions';

const Video: React.FC<IVideoProps> = ({ title, date, coverImg }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <S.VideoCard>
        <S.Menu onClick={(e) => handleClick(e)}>
          <MoreVertIcon className="menu" />
        </S.Menu>
        <S.CoverImg>
          <Image alt="cover image" src={coverImg} className="cover" />
        </S.CoverImg>
        <S.VideoDetails>
          <h2>{title}</h2>
          <p>Date: {format(new Date(date), 'dd/MM/yy h:mm a').toLowerCase()}</p>
        </S.VideoDetails>
      </S.VideoCard>

      <MenuOptions anchorEl={anchorEl} handleClose={handleClose} open={open} />
    </>
  );
};

export default Video;
