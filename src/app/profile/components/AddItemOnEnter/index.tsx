import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import * as S from './styles';

interface IAddItemOnEnterProps {
  initialState: string[];
  placeholder: string;
  name: 'expertise' | 'award' | 'follow' | undefined;
  onAdd: (
    value: string,
    name: 'expertise' | 'award' | 'follow' | undefined,
  ) => void;
  onRemove: (
    index: number,
    name: 'expertise' | 'award' | 'follow' | undefined,
  ) => void;
}

const AddItemOnEnter: React.FC<IAddItemOnEnterProps> = ({
  initialState,
  placeholder,
  name,
  onAdd,
  onRemove,
}) => {
  const [items, setItems] = useState<string[]>(initialState);
  const [inputValue, setInputValue] = useState<string>('');
  const [inputName, setInputName] = useState<
    'expertise' | 'award' | 'follow'
  >();

  // Atualizar items sempre que initialState mudar
  useEffect(() => {
    setItems(initialState);
  }, [initialState]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      onAdd(inputValue, inputName);
      setInputValue('');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.name as 'expertise' | 'award' | 'follow';
    setInputName(inputName);
    setInputValue(event.target.value);
  };

  const handleRemoveItem = (indexToRemove: number) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
    onRemove(indexToRemove, name);
  };

  return (
    <S.Container>
      <div>
        {items.map((item, index) => (
          <S.Tag
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '4px',
            }}
          >
            <span style={{ marginRight: '8px' }}>{item}</span>
            <button onClick={() => handleRemoveItem(index)}>
              {' '}
              <CloseIcon className="close" />
            </button>
          </S.Tag>
        ))}
      </div>
      <S.TextInput
        type="text"
        name={name}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
    </S.Container>
  );
};

export default AddItemOnEnter;
