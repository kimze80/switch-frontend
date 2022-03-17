import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from '.';

const defaultProps = {
  id: '1',
  name: 'Family',
  label: 'Family',
};

describe('<Checkbox />', () => {
  it('Should render a Checkbox component correctly', () => {
    render(<Checkbox {...defaultProps} />);
    expect(screen.getByText('Family')).toBeInTheDocument();
  });

  it('Should on click expand the Checkbox component', () => {
    const handleChange = jest.fn();
    render(<Checkbox {...defaultProps} onChange={handleChange} />);
    fireEvent.click(screen.getByTestId('checkbox'));
    expect(handleChange).toBeCalled();
  });
});
