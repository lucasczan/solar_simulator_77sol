import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Modal, ModalProps } from '.';

export default {
  title: 'Components/Modal',
  component: Modal
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handleModalOpen}>Open Modal</button>
      {isModalOpen && <Modal {...args} close={handleModalClose} />}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <h1>Modal Title</h1>
      <p>Modal Content</p>
    </>
  )
};
