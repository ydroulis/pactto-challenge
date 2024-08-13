import React from 'react';
import * as S from './styles';
import Video from './Video';
import { StaticImageData } from 'next/image';
import { IVideoProps } from '@/app/models/videos';

interface IVideoListProps {
  list: IVideoProps[];
}

const VideoList: React.FC<IVideoListProps> = ({ list }) => {
  return (
    <S.List>
      {list.map((video, i) => {
        return (
          <Video
            title={video.title}
            date={video.date}
            coverImg={video.coverImg}
            key={i}
          />
        );
      })}
    </S.List>
  );
};

export default VideoList;
