import { Meta, StoryObj } from '@storybook/react';
import { Select, SelectProps } from '.';

const RoofOptions = [
  {
    value: 'fibrocimento-madeira',
    label: 'Fibrocimento madeira'
  },
  {
    value: 'fibrocimento-metalico',
    label: 'Fibrocimento metalico'
  },
  { value: 'ceramico', label: 'Cerâmico' },
  { value: 'metalico', label: 'Metalico' },
  { value: 'laje', label: 'Laje' },
  { value: 'solo', label: 'Solo' }
];

export default {
  title: 'Components/Selct',
  component: Select,
  args: {
    label: 'Tipo de telhado',
    options: RoofOptions
  }
} as Meta<SelectProps>;

export const Default: StoryObj<SelectProps> = {};
