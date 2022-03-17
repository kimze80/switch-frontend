/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

type emailGroup = {
  id: string;
  name: string;
};

type SyncContextData = {
  selectedData: emailGroup[];
  setSelectedData: React.Dispatch<React.SetStateAction<emailGroup[]>>;
};

const SyncContext = createContext<SyncContextData>({} as SyncContextData);

const SyncProvider: React.FC = ({ children }) => {
  const [selectedData, setSelectedData] = useState<emailGroup[]>([]);
  return (
    <SyncContext.Provider value={{ selectedData, setSelectedData }}>
      {children}
    </SyncContext.Provider>
  );
};

export { SyncProvider, SyncContext };
