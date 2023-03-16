import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Modal } from '.';

describe('Modal Component', () => {
  it('should render children prop correctly', () => {
    const { getByText } = render(
      <Modal close={() => {}}>
        <h1>Modal Title</h1>
        <p>Modal Content</p>
      </Modal>
    );

    expect(getByText('Modal Title')).toBeDefined();
    expect(getByText('Modal Content')).toBeDefined();
  });

  it('should call close function when backdrop is clicked', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <Modal close={handleClose}>
        <h1>Modal Title</h1>
        <p>Modal Content</p>
      </Modal>
    );

    const backdrop = getByTestId('backdrop');
    fireEvent.click(backdrop);

    expect(handleClose).toHaveBeenCalled();
  });
});
