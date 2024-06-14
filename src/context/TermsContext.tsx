// src/context/TermsContext.tsx
'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react';

type TermsContextType = {
  termsAccepted: boolean;
  setTermsAccepted: (accepted: boolean) => void;
};

const TermsContext = createContext<TermsContextType | undefined>(undefined);

export const TermsProvider = ({ children }: { children: ReactNode }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <TermsContext.Provider value={{ termsAccepted, setTermsAccepted }}>
      {children}
    </TermsContext.Provider>
  );
};

export const useTerms = () => {
  const context = useContext(TermsContext);
  if (context === undefined) {
    throw new Error('useTerms must be used within a TermsProvider');
  }
  return context;
};
