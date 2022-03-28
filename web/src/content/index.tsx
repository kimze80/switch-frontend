import React, { useContext, useState } from 'react';
import {
  Container,
  Content,
  SyncButton,
  StatusText,
  ButtonTextWrapper,
} from './styles';
import Card from '../components/Card';
import * as list from '../data/data';
import gmailIcon from '../assets/gmail.svg';
import mailchimpIcon from '../assets/mailchimp.svg';
import { SyncContext } from '../context/SyncContext';
import * as functions from '../utils/functions';

const MainContent = () => {
  const { selectedData, setSelectedData } = useContext(SyncContext);
  const [statusText, setStatusText] = useState('Sync Contacts');

  const [gmailData, setGmailData] = useState<any[]>(list.gmailData);
  const [mailchimpData, setMailchimpData] = useState<any[]>(list.mailchimpData);

  const gmailListConcatSelectedList = gmailData.concat(selectedData);
  const mailchimpListConcatSelectedList = mailchimpData.concat(selectedData);

  const gmailUniqueList = functions.concatLists(gmailListConcatSelectedList);
  const mailchimpUniqueList = functions.concatLists(
    mailchimpListConcatSelectedList,
  );

  const updateSync = () => {
    setGmailData(gmailUniqueList);
    setMailchimpData(mailchimpUniqueList);
    setSelectedData([]);
    setStatusText('All done!');
  };

  const handleSync = () => {
    if (selectedData.length) {
      setStatusText('Syncing..');

      // Delay of 2 seconds to simulate a request
      setTimeout(() => {
        updateSync();
      }, 2000);
    } else {
      alert('Please select a contact!');
    }
  };

  return (
    <Container>
      <Content>
        <Card
          icon={gmailIcon}
          title="Gmail"
          subtitle="These Gmail contacts will sync to MailChimp"
          data={gmailData}
        />
        <ButtonTextWrapper>
          <SyncButton onClick={handleSync} data-testid="sync-button" />
          <StatusText data-testid="sync-status-text">{statusText}</StatusText>
        </ButtonTextWrapper>
        <Card
          icon={mailchimpIcon}
          title="Mailchimp"
          subtitle="These Mailchimp contacts will sync to Gmail"
          data={mailchimpData}
        />
      </Content>
    </Container>
  );
};

export default MainContent;
