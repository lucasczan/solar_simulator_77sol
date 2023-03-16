import { theme } from '@/theme/theme';
import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Select } from '.';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
];

describe('Select', () => {
  it('Should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Select options={options} />
      </ThemeProvider>
    );
  });

  it('Should call onChange when user select an option', () => {
    const handleChange = jest.fn();

    const { getByLabelText, getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Select
          id="select"
          label="select"
          options={options}
          onChange={handleChange}
        />
      </ThemeProvider>
    );

    fireEvent.change(getByLabelText('select'), { target: { value: 2 } });
    let selectOptions = getAllByTestId('select-option') as HTMLOptionElement[];

    expect(selectOptions[0].selected).toBeFalsy();
    expect(selectOptions[1].selected).toBeTruthy();
    expect(selectOptions[2].selected).toBeFalsy();
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('Should render label when label prop provided', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Select
          id="select"
          label="select"
          options={options}
          onChange={handleChange}
        />
      </ThemeProvider>
    );

    const labelElement = getByLabelText('select');
    expect(labelElement).toBeDefined();
  });
});
