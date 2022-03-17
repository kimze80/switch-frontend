import React, { useContext, useState } from 'react';
import { Container, Content, SyncButton, StatusText } from './styles';
import Card from '../components/Card';
import * as list from '../data/data';
import gmailIcon from '../assets/gmail.svg';
import mailchimpIcon from '../assets/mailchimp.svg';
import { SyncContext } from '../context/SyncContext';

function unSelectAllCheckboxes() {
  const checkboxes = document.querySelectorAll<HTMLInputElement>(
    'input[type="checkbox"]',
  );
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].type === 'checkbox') checkboxes[i].checked = false;
  }
}

const MainContent = () => {
  const { selectedData, setSelectedData } = useContext(SyncContext);
  const [statusText, setStatusText] = useState('Sync Contacts');
  const [gmailData, setGmailData] = useState<any[]>(list.gmailData);
  const [mailchimpData, setMailchimpData] = useState<any[]>(list.mailchimpData);

  const handleSync = () => {
    if (selectedData.length) {
      const gmailConcat = gmailData.concat(selectedData);
      const mailchimpConcat = mailchimpData.concat(selectedData);

      const gmailUnique = Array.from(
        new Set(gmailConcat.map((item) => item.id)),
      ).map((e) => gmailConcat.find(({ id }) => id === e));

      const mailchimpUnique = Array.from(
        new Set(mailchimpConcat.map((item) => item.id)),
      ).map((e) => mailchimpConcat.find(({ id }) => id === e));

      setStatusText('Syncing..');

      // Delay of 2 seconds to simulate a request
      setTimeout(() => {
        setGmailData(gmailUnique);
        setMailchimpData(mailchimpUnique);
        setSelectedData([]);
        unSelectAllCheckboxes();
        setStatusText('All done!');
      }, 2000);
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
        <div>
          <SyncButton onClick={handleSync} data-testid="sync-button" />
          <StatusText data-testid="sync-status-text">{statusText}</StatusText>
        </div>
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
