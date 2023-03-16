import React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { IconProps } from './iconType';

const SearchIcon: React.FC<IconProps> = (props) => {
  return <MagnifyingGlass {...props} />;
};

export { SearchIcon };
