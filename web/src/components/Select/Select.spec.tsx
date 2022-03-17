import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Select from '.';
import { gmailData } from '../../data/data';

describe('<Select />', () => {
  it('Should render a Select component correctly', () => {
    render(<Select data={gmailData} />);
    expect(screen.getByText('All contacts')).toBeInTheDocument();
    expect(screen.getByTestId('select-closed')).toBeInTheDocument();
  });

  it('Should on click expand the Select component', () => {
    render(<Select data={gmailData} />);
    fireEvent.click(screen.getByText('All contacts'));
    expect(screen.getByTestId('select-expanded')).toBeInTheDocument();
  });
});
