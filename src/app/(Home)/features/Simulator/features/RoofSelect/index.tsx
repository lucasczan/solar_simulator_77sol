'use client';

import { Select } from '@/components/Select';
import { roofEnum } from '@/enums/roofEnum';
import React, { useEffect, useState } from 'react';
import { RoofOptions } from './config/options';
import * as S from './styles';

interface RoofSelectProps {
  onChange?(roofSelected: roofEnum): void;
  defaultValue?: string;
  value: string;
}
const RoofSelect: React.FC<RoofSelectProps> = ({
  onChange,
  defaultValue,
  value
}) => {
  const [roofImage, setRoofImage] = useState('');

  const handleChangeRoofType = (roofSelected: roofEnum) => {
    const roof = RoofOptions.find((option) => option.value === roofSelected);
    if (!roof) return;
    setRoofImage(roof?.img);
    if (onChange) {
      onChange(roofSelected);
    }
  };

  useEffect(() => {
    const roof = RoofOptions.find(
      (option) => option.value === defaultValue
    )?.img;
    if (!roof) return;
    setRoofImage(roof);
  }, [defaultValue]);

  useEffect(() => {
    const roof = RoofOptions.find((option) => option.value === value)?.img;
    if (!roof) return;
    setRoofImage(roof);
  }, [value]);

  return (
    <S.RoofSelectContainer>
      <Select
        value={value}
        label="Estrutura do telhado"
        options={RoofOptions}
        defaultValue={defaultValue}
        onChange={(e: any) => handleChangeRoofType(e.target.value)}
      />
      <S.RoofImage src={roofImage} />
    </S.RoofSelectContainer>
  );
};

export default RoofSelect;
