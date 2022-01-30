import React, { createContext } from 'react';

interface Props {
  children: React.ReactNode;
}

export interface Colors {
  primary: string;
  background: string;
  background2: string;
  card?: string;
  text: string;
  border: string;
  notification: string;
  secondary: string;
  tertiary: string;
  danger: string;
}

export const ThemeContext = createContext({
  colors: {} as Colors,
});

export default function ThemeProvider({ children }: Props): JSX.Element {
  const colors = {
    text: '#2F2E41',
    primary: '#8FE1D7',
    secondary: '#0077b6',
    tertiary: '#ade8f4',
    background: '#E6E6E6',
    background2: '#0DAB98',
    danger: '#dc3545',
    border: '#03045e',
    notification: '#caf0f8',
  };

  return (
    <ThemeContext.Provider
      value={{
        colors,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
