import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MainContent from '.';
import { SyncContext } from '../context/SyncContext';

describe('<MainContent />', () => {
  it('Should render a MainContent component correctly', () => {
    render(<MainContent />);
    expect(screen.getByText('Gmail')).toBeInTheDocument();
    expect(screen.getByText('Mailchimp')).toBeInTheDocument();
    expect(
      screen.getByText('These Gmail contacts will sync to MailChimp'),
    ).toBeInTheDocument();
    expect(screen.getByText('Sync Contacts')).toBeInTheDocument();
    expect(screen.getByText('Family')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
  });

  it('Should syncronize contacts when click on sync contacts button', async () => {
    const providerProps = {
      value: {
        selectedData: [{ id: '11', name: 'Family' }],
        setSelectedData: () => jest.fn(),
      },
    };

    render(
      <SyncContext.Provider {...providerProps}>
        <MainContent />
      </SyncContext.Provider>,
    );

    fireEvent.click(screen.getByTestId('sync-button'));

    setTimeout(() => {
      expect(screen.getByText('All done!')).toBeInTheDocument();
    }, 5000);
  });
});
