import React from 'react';
import * as S from './styles';
import Video from './Video';
import { StaticImageData } from 'next/image';
import { IVideoProps } from '@/app/models/videos';
import Loading from '../Loading';

interface IVideoListProps {
  list: IVideoProps[];
  loading: boolean;
  noResults: boolean;
}

const VideoList: React.FC<IVideoListProps> = ({ list, loading, noResults }) => {
  return (
    <S.List>
      {!loading ? (
        !noResults ? (
          list.map((video, i) => {
            return (
              <Video
                title={video.title}
                date={video.date}
                coverImg={video.coverImg}
                key={i}
              />
            );
          })
        ) : (
          <p className="noFound">No videos found</p>
        )
      ) : (
        <Loading />
      )}
    </S.List>
  );
};

export default VideoList;
