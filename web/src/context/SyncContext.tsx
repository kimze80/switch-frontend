/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';
import { Contact } from '../types/types';

type SyncContextData = {
  selectedData: Contact[];
  setSelectedData: React.Dispatch<React.SetStateAction<Contact[]>>;
};

const SyncContext = createContext<SyncContextData>({} as SyncContextData);

const SyncProvider: React.FC = ({ children }) => {
  const [selectedData, setSelectedData] = useState<Contact[]>([]);
  return (
    <SyncContext.Provider value={{ selectedData, setSelectedData }}>
      {children}
    </SyncContext.Provider>
  );
};

export { SyncProvider, SyncContext };
