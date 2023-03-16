import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import { CurrencyInput, CurrencyInputProps } from '.';

export default {
  title: 'Components/Inputs/CurrencyInput',
  component: CurrencyInput,
  args: {
    label: 'Valor da conta de luz'
  },
  decorators: [(Story) => <div style={{ width: 300 }}>{Story()}</div>]
} as Meta<CurrencyInputProps>;

export const Default: StoryObj<CurrencyInputProps> = {};
