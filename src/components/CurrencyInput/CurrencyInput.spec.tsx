import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CurrencyInput } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/theme/theme';

describe('Currencynput', () => {
  test('should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <CurrencyInput />
      </ThemeProvider>
    );
  });

  test('should call onChange when user types text', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <CurrencyInput
          id="currencyInput"
          label="Currency input test"
          onChange={handleChange}
        />
      </ThemeProvider>
    );

    const currencyInput = getByLabelText('Currency input test');
    fireEvent.change(currencyInput, { target: { value: '1.23' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(1.23);
  });

  test('should mask text', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <CurrencyInput
          id="currencyInput"
          label="Currency input test"
          onChange={handleChange}
        />
      </ThemeProvider>
    );

    const currencyInput = getByLabelText('Currency input test');
    fireEvent.change(currencyInput, { target: { value: '2255' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(22.55);
  });

  test('should render error icon when error prop is provided', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <CurrencyInput id="test" label="Test Input" error="required" />
      </ThemeProvider>
    );
    expect(getByTestId('error-icon')).toBeDefined();
  });

  test('should render label when label prop is provided', () => {
    const { getAllByLabelText } = render(
      <ThemeProvider theme={theme}>
        <CurrencyInput id="test" label="Test Input" />
      </ThemeProvider>
    );
    expect(getAllByLabelText('Test Input')).toBeDefined();
  });
});
