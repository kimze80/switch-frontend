import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '.';

const defaultProps = {
  title: 'Gmail',
  subtitle: 'These Gmail contacts will sync to MailChimp',
  icon: 'gmail',
  data: [{ id: '01', name: 'Family' }],
};

describe('<Card />', () => {
  it('Should render a Card component correctly', () => {
    render(<Card {...defaultProps} />);
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByText('Gmail')).toBeInTheDocument();
    expect(
      screen.getByText('These Gmail contacts will sync to MailChimp'),
    ).toBeInTheDocument();
    expect(screen.getByText('All contacts')).toBeInTheDocument();
    expect(screen.getByText('Family')).toBeInTheDocument();
  });
});
