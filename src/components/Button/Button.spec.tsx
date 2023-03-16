// Button.test.tsx

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme/theme';

describe('Button', () => {
  test('renders corrrectly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>test</Button>
      </ThemeProvider>
    );
  });

  test('renders with the main model by default', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>test</Button>
      </ThemeProvider>
    );
    const button = getByText('test');

    expect(button).toHaveStyle(`background-color: ${theme.colors.main};`);
  });

  test('renders with the alt model when the model prop is set to "alt"', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button model="alt">test</Button>
      </ThemeProvider>
    );
    const button = getByText('test');

    expect(button).toHaveStyle(`background-color: ${theme.colors.white};`);
  });

  test('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick}>test</Button>
      </ThemeProvider>
    );
    const button = getByText('test');

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when the disabled prop is set to true', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button disabled>test</Button>
      </ThemeProvider>
    );
    const button = getByText('test');

    expect(button).toBeDisabled();
  });

  test('has the correct type when the type prop is set', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button type="submit">test</Button>
      </ThemeProvider>
    );
    const button = getByText('test');

    expect(button).toHaveAttribute('type', 'submit');
  });
});
