import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Simular</Button>
);

export const Main = Template.bind({});

Main.args = {
  model: 'main',
  type: 'button'
};

export const Alt = Template.bind({});

Alt.args = {
  model: 'alt',
  type: 'button'
};
