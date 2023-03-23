import { ComponentStory, Meta } from '@storybook/react';
import { TextInput, TextInputProps } from '.';

export default {
  title: 'Components/Inputs/TextInput',
  component: TextInput,
  args: {
    label: 'Logradouro',
    placeholder: 'Av. Paulista'
  },
  decorators: [(Story) => <div style={{ width: 300 }}>{Story()}</div>]
} as Meta<TextInputProps>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput label="logradouro" {...args} />
);

export const Default = Template.bind({});

export const Error = Template.bind({});

Error.args = {
  error: 'Campo obrigatório'
};
