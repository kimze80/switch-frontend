import React from 'react';
import GlobalStyle from './styles/global';
import MainContent from './content';

function App(): JSX.Element {
  return (
    <>
      <MainContent />
      <GlobalStyle />
    </>
  );
}

export default App;
