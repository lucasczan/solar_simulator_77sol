import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextInput } from '.';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme/theme';

describe('TextInput test', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <TextInput id="testInput" label="Test Input" />
      </ThemeProvider>
    );
  });

  it('should call onChange when user types text', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <TextInput
          id="test"
          label="Test Input"
          value=""
          onChange={handleChange}
        />
      </ThemeProvider>
    );

    const input = getByLabelText('Test Input');
    fireEvent.change(input, { target: { value: 'test text' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('test text');
  });

  it('renders error icon when error props is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <TextInput id="test" label="Test Input" error="required" />
      </ThemeProvider>
    );
    expect(getByTestId('error-icon')).toBeDefined();
  });
});
