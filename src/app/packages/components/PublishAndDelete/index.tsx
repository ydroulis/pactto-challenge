import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import * as S from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import SwitchButton from '@/app/components/SwitchButton';

interface IPublishAndDeleteProps {
  checked: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  setIsDeleteOpen: Dispatch<SetStateAction<boolean>>;
}

const PublishAndDelete: React.FC<IPublishAndDeleteProps> = ({
  checked,
  handleChange,
  setIsDeleteOpen,
}) => {
  return (
    <S.Actions>
      <S.Publish>
        <p>Package is unpublished</p>
        <SwitchButton checked={checked} onChange={handleChange} />
      </S.Publish>

      <S.Delete onClick={() => setIsDeleteOpen(true)}>
        <p>Delete package</p>
        <DeleteIcon className="delete" />
      </S.Delete>
    </S.Actions>
  );
};

export default PublishAndDelete;
